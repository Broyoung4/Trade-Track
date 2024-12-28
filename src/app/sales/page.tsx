"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';


const Page = () => {
  const [salesToday, setSalesToday] = useState([]);
  const [showSalesPage, setShowSalesPage] = useState(false);


  const router = useRouter();

  // Function to handle user prompt response
  const handlePromptResponse = (response) => {
    if (response.toLowerCase() === "no") {
      setShowSalesPage(true); // Show sales page if user confirms
    } else {
      // Handle case where user doesn't want to input a sale
      alert("User declined to input a sale.");
      router.push('/salesentry');
    }
  };

  // Function to handle adding a new sale
  const handleAddSale = (newSale) => {
    // Check if a sale with the same product already exists today
    const existingSaleIndex = salesToday.findIndex(
      (sale) => sale.product === newSale.product
    );

    if (existingSaleIndex !== -1) {
      // Update existing sale
      const updatedSales = [...salesToday];
      updatedSales[existingSaleIndex] = {
        ...updatedSales[existingSaleIndex],
        quantity: updatedSales[existingSaleIndex].quantity + newSale.quantity,
        total: updatedSales[existingSaleIndex].quantity * newSale.price,
      };
      setSalesToday(updatedSales);
    } else {
      // Add new sale
      setSalesToday([
        ...salesToday,
        { ...newSale, total: newSale.quantity * newSale.price },
      ]);
    }
  };

  // Example: Fetch sales data from API or database (replace with your actual implementation)
  useEffect(() => {
    // Simulate fetching data from an API or database
    const mockSalesData = [
      { product: "Product A", quantity: 2, price: 10 },
      { product: "Product B", quantity: 1, price: 20 },
    ];
    setSalesToday(mockSalesData);
  }, []);

  if (!showSalesPage) {
    return (
      <div className="container min-h-screen p-8 pb-20 font-[family-name:var(--font-geist-sans)] flex_center max-sm:flex-col gap-5">
        <p>Do you wish to input a sale?</p>
        <div className="flex_center gap-4 max-sm:mt-4">

          <button className="gen_button" onClick={() => router.push('/salesentry')}>Yes</button>
          <button className="gen_button" onClick={() => handlePromptResponse("no")}>No</button>
        </div>
      </div>
    );
  }

  return (
    <section className="container min-h-screen p-8 pb-20 font-[family-name:var(--font-geist-sans)]">
      <h1>Inventory</h1>
      <div className="flex justify-center items-center mt-4">
        <h2>Sales Made Today</h2>
        {/* <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {salesToday.map((sale, index) => (
              <tr key={index}>
                <td>{sale.product}</td>
                <td>{sale.quantity}</td>
                <td>{sale.price}</td>
                <td>{sale.total}</td>
              </tr>
            ))}
          </tbody>
        </table> */}
        {/* Add a form or other input mechanism here to allow users to add new sales */}
      </div>
    </section>
  );
};

export default Page;

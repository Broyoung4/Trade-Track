'use client';
import React, { useEffect, useState } from 'react';
import { prisma } from '../db';

const fetchSalesForToday = async () => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const sold = await prisma.sold.findMany({
    where: {
      createdAt: {
        gte: today,
      },
    },
  });

  return sold;
};

const updateInventory = async (sold: { itemId: number; quantity: number }[]) => {
  for (const sale of sold) {
    await prisma.inventory.update({
      where: { id: sale.itemId },
      data: { quantity: { decrement: sale.quantity } },
    });
  }
};

interface Sale {
  id: number;
  name: string;
  quantity: number;
  price: number;
  createdAt: Date;
  updatedAt: Date;
}

const Page = () => {
  const [sales, setSales] = useState<Sale[]>([]);

  useEffect(() => {
    const getSales = async () => {
      const salesData = await fetchSalesForToday();
      setSales(salesData);
      const inventoryUpdates = salesData.map(sale => ({
        itemId: sale.id,
        quantity: sale.quantity,
      }));
      await updateInventory(inventoryUpdates);
    };

    getSales();
  }, []);

  return (
    <div>
      <h1>Sales for Today</h1>
      {sales.length === 0 ? (
        <p>No sales made today</p>
      ) : (
        <table className="w-full mt-4">
          <thead>
            <tr>
              <th className="text-left">Item</th>
              <th className="text-left">Quantity</th>
              <th className="text-left">Price</th>
            </tr>
          </thead>
          <tbody>
            {sales.map((sale, index) => (
              <tr key={index}>
                <td>{sale.name}</td>
                <td>{sale.quantity}</td>
                <td>{sale.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Page;
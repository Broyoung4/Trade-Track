'use client';
import React, { useState } from 'react';

const Page = () => {
  const [itemName, setItemName] = useState('');
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);

  const handleItemNameChange = (event) => {
    setItemName(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(parseFloat(event.target.value) || 0); 
  };

  const handleQuantityChange = (event) => {
    setQuantity(parseInt(event.target.value) || 0);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); 
    // Here, you would typically add the item to your sales data 
    // (e.g., by calling a function to update your state or make an API call)
    console.log('Item Name:', itemName);
    console.log('Price:', price);
    console.log('Quantity:', quantity);

    // Clear input fields after submission
    setItemName('');
    setPrice(0);
    setQuantity(0);
  };

  return (
    <div className='flex_center flex-col gap-5 w-full min-h-screen p-8 pb-20 font-[family-name:var(--font-geist-sans)]'>
      <h2>Add Sale</h2>
      <form onSubmit={handleSubmit}>
        <div className='flex flex-col gap-4'>
          <label htmlFor="itemName">Item Name:</label>
          <input 
            className='border border-slate-50  rounded-lg p-2 unset'
            type="text" 
            id="itemName" 
            value={itemName} 
            onChange={handleItemNameChange} 
          />
        </div>
        <div className='flex flex-col gap-4'>
          <label htmlFor="price">Price:</label>
          <input 
            className=''
            type="number" 
            id="price" 
            value={price} 
            onChange={handlePriceChange} 
          />
        </div>
        <div className='flex flex-col gap-4'>
          <label htmlFor="quantity">Quantity:</label>
          <input 
            type="number" 
            id="quantity" 
            value={quantity} 
            onChange={handleQuantityChange} 
          />
        </div>
        <button type="submit">Add Sale</button>
      </form>
    </div>
  );
};

export default Page;
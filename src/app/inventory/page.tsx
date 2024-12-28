'use client';
import React, { useState } from 'react'
import { MdAdd } from "react-icons/md";
import { IoMdClose } from "react-icons/io";

const page = () => {
    const [inventory, setInventory] = useState([
        { item: 'Small Roller', price: 600, quantity: 1 },
        { item: 'Trowel', price: 1500, quantity: 2 },
        { item: 'Scrapper', price: 1000, quantity: 5 },
    ]);
    const [newItem, setNewItem] = useState({ item: '', price: 0, quantity: 0 });
    const [modal, setModal] = useState(false);

    const addItem = () => {
        // Check if the item already exists in the inventory
        const existingItem = inventory.find(item => item.item === newItem.item);
    
        if (existingItem) {
          // Update existing item's quantity and price
          const updatedInventory = inventory.map(item => {
            if (item.item === newItem.item) {
              return {
                ...item,
                quantity: item.quantity + newItem.quantity,
                price: item.price + newItem.price,
              };
            }
            return item;
          });
          setInventory(updatedInventory);
        } else {
          // Add new item to the inventory
          setInventory([...inventory, newItem]);
        }
    
        // Clear the form after adding the item
        setNewItem({ item: '', price: 0, quantity: 0 });
      };

return (
    <section className="container min-h-screen p-8 pb-20 font-[family-name:var(--font-geist-sans)]">
            <h1>Inventory</h1>
            <div className="flex justify-end items-center mt-4 ">
                    <MdAdd size={25} className='border border-slate-500 hover:bg-red-950' onClick={()=>setModal(true)}/>
            </div>
            {inventory.length === 0 ? <p className="text-center mt-4">No items in inventory</p> : (
                     <div>
                     {/* Inventory Table */}
                     <table className="w-full mt-4">
                             <thead>
                                     <tr>
                                             <th className="text-left">Item</th>
                                             <th className="text-left">Price</th>
                                             <th className="text-left">Quantity</th>
                                     </tr>
                             </thead>
                             <tbody>
                                     {inventory.map((item, index) => (
                                             <tr key={index}>
                                                     <td>{item.item}</td>
                                                     <td>{item.price}</td>
                                                     <td>{item.quantity}</td>
                                            <td>{item.price * item.quantity}</td>
                                             </tr>
                                     ))}
                             </tbody>
                     </table>
             </div>
            )}
         {modal && (
            <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
                <div className="bg-white p-8 rounded-lg">
                            <IoMdClose
                                    size={25}
                                    className="absolute top-4 right-4 text-slate-500 cursor-pointer"
                                    onClick={() => setModal(false)}
                            />
                    <h2>Add Item</h2>
                    <form onSubmit={(e) => {
                            e.preventDefault();
                            addItem();
                            setModal(false);
                    }}>
                        <div className="flex flex-col gap-4 mt-4">
                            <input
                                type="text"
                                placeholder="Item"
                                className="border border-slate-500 rounded-lg p-2"
                                value={newItem.item}
                                onChange={(e) => setNewItem({ ...newItem, item: e.target.value })}
                            />
                            <input
                                type="number"
                                placeholder="Price"
                                className="border border-slate-500 rounded-lg p-2"
                                value={newItem.price.toString()}
                                onChange={(e) => setNewItem({ ...newItem, price: parseFloat(e.target.value) || 0 })}
                            />
                            <input
                                type="number"
                                placeholder="Quantity"
                                className="border border-slate-500 rounded-lg p-2"
                                value={newItem.quantity.toString()}
                                onChange={(e) => setNewItem({ ...newItem, quantity: parseInt(e.target.value) || 0 })}
                            />
                            <button
                                type="submit"
                                className="bg-red-950 text-white p-2 rounded-lg"
                                onClick={(e) => {
                                    if (!newItem.item || !newItem.price || !newItem.quantity) {
                                        e.preventDefault();
                                        alert('All fields are required');
                                    }
                                }}
                            >
                                Add
                            </button>
                        </div>
                    </form>
                </div>
            </div>
         )}
    </section>
)
}

export default page
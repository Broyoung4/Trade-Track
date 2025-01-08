import { prisma } from "@/app/db";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

async function createSold(data: FormData) {
  "use server";

  const name = data.get("name")?.valueOf();
  const price = data.get("price")?.valueOf();
  const quantity = data.get("quantity")?.valueOf();

  if (typeof name !== "string" || name.length === 0) {
    throw new Error("Invalid Title");
  } else if (typeof price !== "string" || price.length === 0) {
    throw new Error("Invalid Price");
  } else if (typeof quantity !== "string" || quantity.length === 0) {
    throw new Error("Invalid Quantity");
  }

  // Check if the item already exists
const existingItem = await prisma.inventory.findFirst({
    where: { name },
  });

  if (existingItem) {
    // Update the quantity of the existing item
    await prisma.inventory.update({
      where: { id: existingItem.id },
      data: { quantity: existingItem.quantity - Number(quantity) },
    });

    await prisma.sold.create({
      data: { name, price: Number(price), quantity: Number(quantity) },
    });
   } else {
  alert("Item does not exist");
}
  redirect("/sales");
}

const page = () => {
  return (
    <>
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl">Add Inventory</h1>
      </header>
      <form action={createSold} className="flex flex-col gap-2">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          className="border border-slate-300 
        bg-transparent px-2 py-1 rounded focus-within:border-slate-100 outline-none"
        />
        <label htmlFor="name">Price</label>
        <input
          type="text"
          name="price"
          className="border border-slate-300 
        bg-transparent px-2 py-1 rounded focus-within:border-slate-100 outline-none"
        />
        <label htmlFor="name">Quantity</label>
        <input
          type="text"
          name="quantity"
          className="border border-slate-300 
        bg-transparent px-2 py-1 rounded focus-within:border-slate-100 outline-none"
        />
        <div className="flex gap-1 justify-end">
          <Link
            className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
            href="/sold"
          >
            Cancel
          </Link>
          <button
            className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
            type="submit"
          >
            Create
          </button>
        </div>
      </form>
    </>
  );
};

export default page;

import { MdAdd } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { prisma } from "../db";
import InventoryComp from "../components/InventoryComp";
import Link from "next/link";
import { useSession } from "next-auth/react";

async function getInventory() {
  return await prisma.inventory.findMany();
}

const page = async () => {
    const inventory = await getInventory();
  
    console.log(inventory);
  
  return (
    <section className="container min-h-screen p-8 pb-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="sm:text-4xl text-3xl font-black sm:mb-10 mb-6">INVENTORY</h1>
      <div className="flex justify-between items-center">

        <Link className="border border-slate-300 bg-transparent px-2 py-1 rounded hover:bg-neutral-400 focus-within:bg-neutral-400" href='/'>Back</Link>

        <Link href='/inventory/new' className="flex justify-end items-center mt-4 ">
          <MdAdd
            size={25}
            className="border border-slate-500 hover:bg-red-950"
          />
        </Link>
      </div>
      {inventory.length === 0 ? (
        <p className="text-center mt-4">No items in inventory</p>
      ) : (
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
              {inventory.filter(item => item.quantity > 0 ).map((item, index) => (
                <InventoryComp key={index} item={item} />
              ))}
            </tbody>
          </table>
        </div>
      )}
     
    </section>
  );
};

export default page;

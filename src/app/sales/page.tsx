import Link from "next/link";
import { prisma } from "../db"; // Adjust the import according to your project structure
import { MdAdd } from "react-icons/md";

async function getInventory() {
  return await prisma.sold.findMany({
    orderBy: {
      createdAt: 'asc', // or 'desc' for descending order
    },
  });
}

const groupByDate = (sales) => {
  return sales.reduce((groups, sale) => {
    const date = new Date(sale.createdAt).toLocaleDateString();
    if (!groups[date]) {
      groups[date] = [];
    }
    groups[date].push(sale);
    return groups;
  }, {});
};

const page = async () => {
  const sold = await getInventory();
  const groupedSales = groupByDate(sold);

  return (
    <section className="container min-h-screen p-8 pb-20 font-[family-name:var(--font-geist-sans)]">
      <h1>Sold Today</h1>
      <Link href='/sales/new' className="flex justify-end items-center mt-4 ">
        <MdAdd
          size={25}
          className="border border-slate-500 hover:bg-red-950"
        />
      </Link>
      {Object.keys(groupedSales).length === 0 ? (
        <p className="text-center mt-4">No items sold</p>
      ) : (
        Object.keys(groupedSales).map((date) => (
          <div key={date}>
            <h1 className="text-3xl">Sold on {date}</h1>
            <table className="w-full mt-4">
              <thead>
                <tr>
                  <th className="text-left">Item</th>
                  <th className="text-left">Price</th>
                  <th className="text-left">Quantity</th>
                </tr>
              </thead>
              <tbody>
                {groupedSales[date].map((item, index) => (
                  <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>{item.quantity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))
      )}
    </section>
  );
};

export default page;
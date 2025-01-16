import Link from "next/link";

const Form = ({ item, setItem, submitting, handleSubmit }) => {
  return (
    <section className="w-full max-w-full flex flex-col justify-start items-center">
      <h1 className="sm:text-4xl text-3xl mb-4 text-left">Add Inventory</h1>
      <p className="text-slate-300 text-left">
        Fill in the form below to add a new item to the inventory.
      </p>
      <form
        onSubmit={handleSubmit}
        className="mt-10 w-full max-w-2xl flex flex-col gap-4"
      >
        <label htmlFor="name">
          <span className="font-semibold text-base text-neutral-400">Name</span>
        </label>
        <input
          value={item.name}
          onChange={(e) => setItem({ ...item, name: e.target.value })}
          type="text"
          name="name"
          placeholder="Enter item name"
          required
          className="border border-slate-300 
        bg-transparent px-2 py-1 rounded focus-within:border-slate-100 outline-none placeholder:text-neutral-500"
        />
        <label htmlFor="name">
          <span className="font-semibold text-base text-neutral-400">
            Price
          </span>
        </label>
        <input
          value={item.price}
          onChange={(e) => setItem({ ...item, price: e.target.value })}
          placeholder="Enter item price"
          type="text"
          name="price"
          required
          className="border border-slate-300 
        bg-transparent px-2 py-1 rounded focus-within:border-slate-100 outline-none"
        />
        <label htmlFor="name">
          <span className="font-semibold text-base text-neutral-400">
            Quantity
          </span>
        </label>
        <input
          value={item.quantity}
          onChange={(e) => setItem({ ...item, quantity: e.target.value })}
          placeholder="Enter item quantity"
          type="text"
          name="quantity"
          required
          className="border border-slate-300 
        bg-transparent px-2 py-1 rounded focus-within:border-slate-100 outline-none"
        />
        <div className="flex gap-1 justify-end items-center mb-5 mx-3 gap-4">
          <Link
            className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
            href="/inventory"
          >
            Cancel
          </Link>
          <button
            className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
            type="submit"
            disabled={submitting}
          >
            Create
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;

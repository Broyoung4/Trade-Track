import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="font-black sm:text-3xl text-2xl">Trade Track</h1>
        <div className="flex flex-col items-center justify-center gap-4">
          <Link
            href="/inventory"
            className="px-6 py-4 border border-slate-500 rounded-xl"
          >
            Inventory
          </Link>
          <Link href="/inventory" className="px-6 py-4 border border-slate-500 rounded-xl">
            Sales
          </Link>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}

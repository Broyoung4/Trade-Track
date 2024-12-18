import React from 'react'

const page = () => {
  return (
    <section className="container min-h-screen p-8 pb-20 font-[family-name:var(--font-geist-sans)]">
        <h1>Inventory</h1>
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
                    <tr>
                        <td>Small Roller</td>
                        <td>600</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>Trowel</td>
                        <td>1500</td>
                        <td>2</td>
                    </tr>
                    <tr>
                        <td>Scrapper</td>
                        <td>1000</td>
                        <td>5</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </section>
  )
}

export default page
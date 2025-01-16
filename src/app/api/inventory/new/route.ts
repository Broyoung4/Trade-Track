import { connectToDB } from "../../../../../utils/database";
import Inventory from "../../../../../models/inventory";

export const POST = async (req) => {
  const { name, price, quantity, userId } = await req.json();

  try {
    await connectToDB();
    const newInventory = new Inventory({
      creator: userId,
      itemName: name,
      price,
      quantity,
    });

    await newInventory.save();

    return new Response(JSON.stringify(newInventory), { status: 201 });
  } catch (error) {
    return new Response('Failed to create inventory', { status: 500 });
  }
};

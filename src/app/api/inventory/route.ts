import { connectToDB } from "../../../../utils/database";
import Inventory from "../../../../models/inventory";

export const GET = async (request) => {
    try {
        await connectToDB();

        const inventories = await Inventory.find({}).populate('creator');

        return new Response(JSON.stringify(inventories), {status: 200})
    } catch (error) {
        return new Response('Failed to fetch all inventories', {status: 500})
    }
}
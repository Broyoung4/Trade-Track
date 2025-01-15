import { model, models, Schema } from "mongoose";

const InventorySchema = new Schema({
    itemName: {
        type: String,
        required: true,
        trim: true
    },
    quantity: {
        type: Number,
        required: true,
        min: 0
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    supplier: {
        type: String,
        trim: true
    },
    dateAdded: {
        type: Date,
        default: Date.now
    }
})

const Inventory = models.Inventory || model('Inventory', InventorySchema);

export default Inventory;
import { model, models, Schema } from "mongoose";

const InventorySchema = new Schema({
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    itemName: {
        type: String,
        required: [true, 'Please provide a name for the item'],
        trim: true
    },
    quantity: {
        type: Number,
        required: [true, 'Please provide a quantity for the item'],
        min: 0
    },
    price: {
        type: Number,
        required: [true, 'Please provide a price for the item'],
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
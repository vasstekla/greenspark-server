import { Schema, model, connect, disconnect, connection } from 'mongoose';
import { IProduct } from './products/product.interface';

const productSchema = new Schema({
    _id: {
        type: Number,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    amount: {
        type: Number,
        required: true
    },
    action: {
        type: String,
        required: true,
    },
    active: {
        type: Boolean,
        required: true,
    },
    linked: {
        type: Boolean,
        required: true,
    },
    selectedColor: {
        type: String,
        required: true,
    }
})

const products: IProduct[] = [
    {
        "_id": 1,
        "type": "plastic bottles",
        "amount": 100,
        "action": "collects",
        "active": true,
        "linked": false,
        "selectedColor": "blue"
    },
    {
        "_id": 2,
        "type": "trees",
        "amount": 10,
        "action": "plants",
        "active": false,
        "linked": true,
        "selectedColor": "green"
    },
    {
        "_id": 3,
        "type": "carbon",
        "amount": 100,
        "action": "offsets",
        "active": false,
        "linked": false,
        "selectedColor": "beige"
    }
]

async function run() {
    await connect('mongodb://127.0.0.1:27017/productdb');
    let db = model('Product', productSchema)
    await db.deleteMany().then(() => {
        db.insertMany(products).then(() => { connection.close() })
    })

}

run().catch(err => console.log(err))
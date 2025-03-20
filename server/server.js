import express from 'express'
import { MongoClient, ObjectId } from 'mongodb';
import dotenv from 'dotenv';
import cors from 'cors';


dotenv.config();
const url = process.env.MONGO_DB_URL;
const dbName = process.env.MONGO_DB;
const collectionName = process.env.MONGO_DB_COLLECTION;
const cartName = process.env.MONGO_DB_CART;

const app = express();
app.use(cors());
app.use(express.json());
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

app.get('/allProducts', async (req, res) => {
    try {
        const client = await MongoClient.connect(url);
        const db = client.db(dbName);
        const collection = db.collection(collectionName);
        const products = await collection.find({}).toArray();
        if (products) {
            res.json(products);
        } else {
            res.status(404).send('Item not found');
        }
    } catch (err) {
        console.error("Error:", err);
        res.status(500).send("Couldn't find products");
    }
});

app.post('/allProducts/search', async (req, res) => {
    try {
        const { searchTerm } = req.body;
        const client = await MongoClient.connect(url);
        const db = client.db(dbName);
        const collection = db.collection(collectionName);
        const regex = new RegExp(searchTerm, 'i'); // Create a case-insensitive regular expression
        const products = await collection.find({ 'name': regex }).toArray();
        products.push(await collection.find({'product_type': regex}).toArray());
        products.push(await collection.find({'category': regex}).toArray());
        res.json(products);
    } catch (err) {
        console.error('Error:', err);
        res.status(500).send('Error finding items');
    }
});

app.get('/allProducts/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const client = await MongoClient.connect(url);
        const db = client.db(dbName);
        const collection = db.collection(collectionName);
        const product = await collection.findOne({id: Number(id)});
        if (product) {
            res.json(product);
        } else {
            res.status(404).send('Item not found');
        }
    } catch (err) {
        console.error('Error:', err);
        res.status(500).send('Error finding this item');
    }
});

app.post('/allProducts/', async (req, res) => {
    try {
        let{ product:newItem, quantity } = req.body;
        const client = await MongoClient.connect(url);
        const db = client.db(dbName);
        const collection = db.collection(cartName);
        newItem = {...newItem, quantity:quantity};
        const result = await collection.insertOne(newItem);
        res.status(201).send(`{"_id":"${result.insertedId}"}`);
    } catch (err) {
        console.error('Error:', err);
        res.status(500).send('Insert Error');
    }
});

app.delete('/allProducts/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const client = await MongoClient.connect(url);
        const db = client.db(dbName);
        const collection = db.collection(cartName);
        const result = await collection.deleteOne({ _id: new ObjectId(id) });
        if (result.deletedCount === 1) {
            res.status(200).send('Item deleted successfully');
        } else {
            res.status(404).send('Item not found');
        }
    } catch (err) {
        console.error('Error:', err);
        res.status(500).send('Deletion error');
    }
});


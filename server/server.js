import express from 'express'
import { MongoClient, ObjectId } from 'mongodb';
import dotenv from 'dotenv';
import cors from 'cors';


dotenv.config();
const url = process.env.MONGO_DB_URL;
const dbName = process.env.MONGO_DB;
const collectionName = process.env.MONGO_DB_COLLECTION;

const app = express();
app.use(cors());
app.use(express.json());
const PORT = 5000;

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


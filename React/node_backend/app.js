const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const Product = require('./model/product');

const app = express();

app.use(express.json());
app.use(cors());

const connectionString = process.env.CONNECTION_STRING || "";


app.get('/', (req, res) => {
    res.send("Node Backend is Running");
})

app.post('/product', async (req, res) => {

    try {
        const product_name = req.body.product_name;
        const image = req.body.image;
        const description = req.body.description;
        const price = req.body.price;

        const product = new Product({ product_name, image, description, price });
        const result = await product.save();
        res.send({ status: 'success' });
    }
    catch (error) {
        console.log(error.message);
        res.send({ status: 'error', message: error.message });
    }
})

app.get('/product', async (req, res) => {
    try {
        const products = await Product.find({})
        res.send({ status: 'success', data: products });
    }
    catch (error) {
        console.log(error.message);
        res.send({ status: 'error', message: error.message });
    }
})

async function connectDb() {
    try {
        await mongoose.connect(connectionString);
        app.listen(process.env.PORT, () => {
            console.log("Server is running");
        });
    } catch (error) {
        console.log(error);
    }
}

connectDb();

//Express

const express = require('express');
//Mongodb 
const { MongoClient, ObjectId } = require('mongodb');
///
const moment = require('moment');
require('dotenv').config();
///
const router = express.Router();

const bases = process.env.PORT;
const nombrebase = 'BaseDeDatos-filtro';

router.get('/queryDirecta', async (req, res) => {
    try {
        const client = new MongoClient(bases);
        await client.connect();
        const db = client.db(nombrebase);
        const collection = db.collection('Indicadores');
        const result = await collection.find().sort({ nombre: 1 }).toArray();
        res.json({
            msg: " indicadores por primer nombre",
            result
        });
        client.close();
    } catch (error) {
        console.log(error, "Error queryDirecta.");
    }
});
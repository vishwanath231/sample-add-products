import express from "express";
const router = express.Router()
import upload from '../utils/multer.js';
import Product from '../model/productModel.js'


router.post("/", upload.array("myFile"), async (req, res) => {

    const { name, description, price, category, brand, countInStock, } = req.body;

    if (!name || !description || !price || !category || !brand || !countInStock) {
        res.status(401)
        throw new Error('all fields reqired!')
    }

    const filesName = req.files


    const imageName = filesName[0].filename;
    const videoName = filesName[1].filename;

    const newProduct = new Product({
        name: name,
        description: description,
        price: price,
        category: category,
        brand: brand,
        countInStock: countInStock,
        image: imageName,
        video: videoName
    })

    const savedProduct = await newProduct.save();

    if (savedProduct) {
        res.status(200).json({
            name: name,
            description: description,
            price: price,
            category: category,
            brand: brand,
            countInStock: countInStock,
            image: imageName,
            video: videoName
        })
    }
});

export default router;
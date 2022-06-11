import mongoose from "mongoose";


const productSchema = mongoose.Schema({
    
    name: {
        type:String,
        required: true
    },
    description: {
        type:String,
        required: true
    },
    image: {
        type:String,
        required: true
    },
    video: {
        type:String,
        required: true
    },
    price: {
        type:Number,
        required: true,
        default: 0
    },
    category: {
        type:String,
        required: true
    },
    brand: {
        type:String,
        required: true
    },
    countInStock: {
        type: Number,
        required: true,
        default: 0
    },

}, {

    timestamps: true
})


const Product = mongoose.model('Product', productSchema);


export default Product;
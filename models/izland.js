const mongoose = require ("mongoose")

const Schema = mongoose.Schema;

const IzlandFoodSchema = new Schema({

    title: {
        type: String,
        trim: true,
        required: "Please enter a Title",
    },

    description: {
        type: String,
        trim: true,
    },

    imageURL: {
        type: String,
        trim: true,
        required: "Enter a product image URL"
    },

    price: {
        type: Number,
        required: "Enter a product price"
    },
});

const IzlandFood = mongoose.model("IzlandFood", IzlandFoodSchema)

module.exports = IzlandFood;
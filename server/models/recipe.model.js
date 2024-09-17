import mongoose from "mongoose";

//making schema (a blue print to define the constraints)
const recipeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    categories: [{
        type: String
    }],
    rating: {
        type: Number,
        min: 0,
        max: 5
    },
    prepTime: {
        type: Number,
        required: true
    },
    description: {
        type: String
    },
    ingredients: [{
        type: String
    }],
    imageUrl: {
        type: String
    }
});

export const Recipe = mongoose.model('Recipe', recipeSchema);//model.(name of model as parameter , schnema of the defined model)



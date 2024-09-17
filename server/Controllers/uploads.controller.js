import { Recipe } from "../models/recipe.model.js";

export const uploadRecipe = async (req, res) => {
    try {
        const { recipeName, categories, rating, prepTime, description, ingredients } = req.body;
        const imageUrl = req.file ? `http://localhost:${process.env.PORT || 8000}/uploads/${req.file.filename}` : '';

        const newRecipe = new Recipe({
            name:recipeName,
            categories: categories  || [],
            rating: rating ? parseFloat(rating) : undefined,
            prepTime: parseInt(prepTime),
            description:description,
            ingredients: ingredients || [],
            imageUrl:imageUrl,
        });

        const savedRecipe = await newRecipe.save();
    
        res.status(201).json({ message: 'Recipe created successfully', recipe: savedRecipe });
    } catch (error) {
        res.status(500).json({ message: 'Error while creating recipe', error: error.message });
    }
};
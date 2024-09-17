import { Recipe } from "../models/recipe.model.js"

//to create a recipe 
const createRecipe = async (req, res) => {
    try {
        const recipe = await Recipe.create(req.body);
        res.status(200).json(recipe);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

//to get recipe 
const getRecipes = async (req, res) => {
    try {
        const recipes = await Recipe.find().lean();
        res.status(200).json(recipes);

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

//to get a single recipe by id
const getRecipeById = async (req, res) => {
    try {
        const { id } = req.params;
        const recipe = await Recipe.findById(id);
        res.status(200).json(recipe);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

//to update  existing recipe by id
const updateRecipe = async (req, res) => {
    try {
        const { id } = req.params;
        const recipe = await Recipe.findByIdAndUpdate(id, req.body, { new: true });

        if (!recipe) {
            res.status(500).json({ message: "Recipe with this id was not found." })
        }
        res.status(200).json(recipe);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//to delete a recipe
const deleteRecipe = async (req, res) => {
    try {
        const { id } = req.params;
        const recipe = await Recipe.findByIdAndDelete(id);

        if (!recipe) {
            res.status(500).json({ message: "Recipe with this id was not found." })
        }
        res.status(200).json({message:"Recipe Deleted Successfully"});

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export { createRecipe, getRecipes, getRecipeById, updateRecipe,deleteRecipe };

import React, { useEffect, useRef, useState } from 'react'
import Headerdivider from '../utils/Headerdivider'
import { Star, Plus, Upload } from 'lucide-react';
import { Controller, useFieldArray, useForm } from 'react-hook-form';
import axios from 'axios';

function AddRecipes() {

    const { register, control, handleSubmit } = useForm({
        defaultValues: {
            recipeName: '',
            description: '',
            ingredients: [],
            prepTime: '',
            instructions: '',
            categories: [],
            rating: 0,
            image: null
        }
    });

    const [imagePreview, setImagePreview] = useState(null);
    // const [imagePath, setImagePath] = useState('');

    const { fields: ingredientsFields, append: appendIngredient } = useFieldArray({
        control,
        name: "ingredients"
    });

    const { fields: categoriesFields, append: appendCategory } = useFieldArray({
        control,
        name: "categories"
    })

    useEffect(() => {
        if (ingredientsFields.length === 0) {
            appendIngredient(''); // Adds an initial empty field if none exist
        }
        if (categoriesFields.length === 0) {
            appendCategory(''); // Adds an initial empty field if none exist
        }
    }, [ingredientsFields, categoriesFields, appendIngredient, appendCategory]);

    //image preview section
    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const previewUrl = URL.createObjectURL(file);
            setImagePreview(previewUrl);
        } else {
            setImagePreview(null);
        }
    }

    const onSubmit = async (data) => {

        console.log(data)

        try {
            const formData = new FormData();

            // Append text fields
            formData.append('recipeName', data.recipeName);
            formData.append('description', data.description);
            formData.append('prepTime', data.prepTime);
            formData.append('instructions', data.instructions);
            formData.append('rating', data.rating);

            // Append arrays
            data.ingredients.forEach((ingredient, index) => {
                formData.append(`ingredients[${index}]`, ingredient);
            });
            data.categories.forEach((category, index) => {
                formData.append(`categories[${index}]`, category);
            });

            // Append image file
            if (data.image[0]) {
                formData.append('image', data.image[0]);
            }

            const apiUrl = '/api/uploadRecipes';
            const response = await axios.post(apiUrl, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            console.log('Success:', response.data);

        } catch (error) {
            console.error('Error:', error.response?.data || error.message);
        }
    };

    return (
        <>
            <div className=' bg-white p-4 m-1 border rounded-lg'>
                <h1 className="text-2xl font-bold">Add Recipes</h1>
                <Headerdivider />
                <form onSubmit={handleSubmit(onSubmit)} className="m-4 flex flex-col md:flex-row gap-8">

                    <div className="flex-1">
                        <div className="mb-4">
                            <label htmlFor="recipeName" className="block text-sm font-medium text-gray-700 mb-1">Recipe Name:</label>
                            <input {...register('recipeName')} id="recipeName" className="w-full p-2 border rounded-md" />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">Description:</label>
                            <textarea {...register('description')} rows={3} className="w-full p-2 border rounded-md"></textarea>
                        </div>

                        {/* adding ingredients section */}
                        <div className="mb-4">
                            <label htmlFor="ingredients" className="block text-sm font-medium text-gray-700 mb-1">Ingredients:</label>
                            {ingredientsFields.map((field, index) => {

                                const inputId = `ingredient-${index}`;
                                // Unique ID for each ingredient input
                                return (
                                    <div key={field.id} className="flex mb-2">
                                        <label htmlFor={inputId} className="sr-only">Ingredient {index + 1}:</label>
                                        <Controller
                                            name={`ingredients.${index}`}
                                            control={control}
                                            render={({ field }) => (
                                                <input
                                                    {...field}
                                                    id={inputId}
                                                    className="flex-grow p-2 border rounded-l-md"
                                                    placeholder='enter ingredient'
                                                />
                                            )}
                                        />

                                        {index === ingredientsFields.length - 1 && (
                                            <button type="button" onClick={() => appendIngredient('')} className="bg-gray-200 p-2 rounded-r-md">
                                                <Plus size={20} />
                                            </button>
                                        )}
                                    </div>
                                );
                            })}
                        </div>

                        <div className="mb-4">
                            <label htmlFor="prepTime" className="block text-sm font-medium text-gray-700 mb-1">Prep Time:</label>
                            <input {...register("prepTime")} id="prepTime" className="w-full p-2 border rounded-md" />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="instructions" className="block text-sm font-medium text-gray-700 mb-1">Instructions:</label>
                            <textarea {...register("instructions")} rows={5} className="w-full p-2 border rounded-md"></textarea>
                        </div>
                    </div>

                    {/* upload section */}
                    <div className=" w-full md:w-80">
                        <div className="mb-4">
                            <div className="bg-blue-100 w-full h-48 rounded-md flex items-center justify-center">
                                <input
                                    type="file"
                                    {...register('image')}
                                    className="w-full inset-0 h-full opacity-0 cursor-pointer"
                                    accept="image/*"
                                    onChange={handleImageChange}  // Handle image change
                                />
                                {imagePreview ? (
                                    <img
                                        src={imagePreview}
                                        alt="Image Preview"
                                        className="w-full h-full object-cover rounded-md"
                                    />
                                ) : (
                                    <Upload size={48} className="text-blue-500" />
                                )}
                            </div>
                            <button
                                type="button"
                                className="mt-2 w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition-colors"
                            >
                                Upload a Picture
                            </button>
                        </div>

                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700 mb-1">Select Ratings:</label>
                            <input
                                type="number"
                                {...register('rating')}
                                min="0"
                                max="5"
                                className="w-full p-2 border rounded-md"
                            />
                        </div>

                        {/* adding categories */}
                        <div className="mb-4">
                            <label htmlFor="categories" className="block text-sm font-medium text-gray-700 mb-1">Categories:</label>
                            {categoriesFields.map((field, index) => {
                                const inputId = `category-${index}`;
                                return (
                                    <div key={field.id} className="flex mb-2">
                                        <label htmlFor={inputId} className="sr-only">Category {index + 1}:</label>
                                        <Controller
                                            name={`categories.${index}`}
                                            control={control}
                                            render={({ field }) => (
                                                <input
                                                    {...field}
                                                    id={inputId}
                                                    className="flex-grow p-2 border rounded-l-md"
                                                    placeholder='enter ingredient'
                                                />
                                            )}
                                        />

                                        {index === categoriesFields.length - 1 && (
                                            <button type="button" onClick={() => appendCategory('')} className="bg-gray-200 p-2 rounded-r-md">
                                                <Plus size={20} />
                                            </button>
                                        )}
                                    </div>
                                )
                            })
                            }
                        </div>

                        <div className="flex gap-2">
                            <button type='submit' className="flex-1 bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition-colors">
                                Add
                            </button>
                            <button className="flex-1 bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition-colors">
                                Delete
                            </button>
                        </div>
                    </div>
                </form >
            </div >
        </>
    )
}

export default AddRecipes

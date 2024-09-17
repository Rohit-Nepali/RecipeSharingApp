import { React, useEffect, useState } from 'react'
import axios from 'axios'

export default function Card() {

    const [recipes, setrecipe] = useState([]);

    useEffect(() => {
        axios.get('/api/getRecipe')
            .then((res) => {
                setrecipe(res.data);
            })
            .catch((error) => {
                console.log(error)
            })
    }, []);

    return (
        <>
            <div className="mb-4 h-full">
                <h2 className="text-lg font-semibold mb-2">Explore Recipes</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-4">
                {recipes.map((recipe) => (
                    <div key={recipe._id} className="shadow-md shadow-green-200 rounded-lg overflow-hidden">
                        <img src={recipe.imageUrl} alt={recipe.name} className="w-full h-48 object-cover" />
                        <div className="p-3">
                            <h3 className="font-bold">{recipe.name}</h3>
                            <p className="text-sm text-gray-600">{recipe.categories + " "}</p>
                            <div className="flex justify-between items-center mt-2">
                                <span className="flex items-center space-x-4 text-sm">
                                    <svg className="w-6 h-6 text-black " viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM12 21.5C6.75329 21.5 2.5 17.2467 2.5 12C2.5 6.75329 6.75329 2.5 12 2.5C17.2467 2.5 21.5 6.75329 21.5 12C21.5 17.2467 17.2467 21.5 12 21.5ZM13 6.5C13 6.22386 12.7761 6 12.5 6C12.2239 6 12 6.22386 12 6.5V12.5C12 12.7761 12.2239 13 12.5 13H16.5C16.7761 13 17 12.7761 17 12.5C17 12.2239 16.7761 12 16.5 12H13V6.5Z" fill="currentColor"/>
                                    </svg>
                                    {recipe.prepTime + " min"}
                                </span>
                                <div className="flex">
                                    {[...Array(recipe.rating)].map((_, i) => (
                                        <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

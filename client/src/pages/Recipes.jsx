import React, { useEffect, useState } from 'react';
import Headerdivider from '../utils/Headerdivider';
import axios from 'axios';
import CustomCard from '../utils/CustomCard';

function Recipes() {
    const [recipes, setRecipes] = useState([]);  //fetches and stores the whole recipes available
    const [currentIndex, setCurrentIndex] = useState(0); // current recipe index

    const CustomPurple = '#D4D4FF';
    const CustomGreen = '#C5FFCC';
    const CustomBlue = '#D7EDFF';
    const CustomYelllow = '#FFF4B0';
    const CustomRed = '#FFCFCF';


    useEffect(() => {
        axios.get('/api/getRecipe')
            .then((res) => {
                setRecipes(res.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    // Function to move to the next recipe
    const handleNext = () => {
        if (currentIndex < recipes.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    // Function to select a recipe by index
    const handleSelectRecipe = (index) => {
        setCurrentIndex(index);
    };


    return (
        <>
            <main className="bg-white p-4 m-1 rounded-lg">
                <h1 className="text-2xl font-bold">Your Recipes</h1>
                <Headerdivider />

                {recipes.length > 0 && (
                    <section className='flex space-x-2'>
                        {/* left */}
                        < main className="w-2/5 p-2">
                            <div className=" grid w-full h-auto ">
                                <div className='flex justify-center'>
                                    <div className=''>
                                        <img
                                            src={recipes[currentIndex].imageUrl}
                                            alt={recipes[currentIndex].name}
                                            className="h-96 w-96 rounded-lg object-cover"
                                        />
                                        <h1 className="text-2xl font-bold mb-4 text-center">
                                            {recipes[currentIndex].name}
                                        </h1>
                                    </div>
                                </div>

                                {/* instruction box */}
                                <div className="bg-[#D7EDFF] p-3 sm:p-4 lg:p-4 rounded-cl">
                                    <div className='flex justify-center p-2'>
                                        <img src='CookingBook.svg' />
                                        <span className=' text-xl font-bold'>Instructions :</span>
                                    </div>
                                    {/* instructions */}
                                    <div className="p-0">
                                        <ul>
                                            {/* {recipes[currentIndex].instructions} */}
                                            <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis, provident!</li>
                                            <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis, provident!</li>
                                            <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis, provident!</li>
                                            <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis, provident!</li>
                                            <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis, provident!</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </main>

                        {/* right */}
                        <main className=" w-3/5  p-2 relative" >
                            {/* four components container*/}
                            <div className="grid grid-cols-2 p-2 gap-2 ">
                                <div className="space-y-4">
                                    <CustomCard value={recipes[currentIndex].categories} title='Category' color={CustomYelllow} />
                                    <CustomCard value={recipes[currentIndex].description} title='Description' color={CustomGreen} />
                                </div>

                                <div className="p-2">
                                    <CustomCard value={recipes[currentIndex].ingredients} title='Ingredients' color={CustomPurple} />
                                </div>
                            </div>

                            {/* other recipes mini cards and button container  */}
                            <div className="absolute ">
                                <div className="flex space-x-4 mt-4 p-2 ">
                                    {/* Small cards for quick navigation */}
                                    {recipes.map((recipe, index) => (
                                        <div
                                            key={index}
                                            className={`cursor-pointer border p-2 rounded bg-[#FFCFCF] ${index === currentIndex ? 'border-green-500' : 'border-gray-300'}`}
                                            onClick={() => handleSelectRecipe(index)}
                                        >
                                            <img
                                                src={recipe.imageUrl}
                                                alt={recipe.title}
                                                className="w-20 h-20 object-cover"

                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </main>
                    </section>
                )}
            </main >
        </>
    );
}

export default Recipes;


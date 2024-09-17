import React from 'react';
import CustomEditButton from './CustomEditButton';

const CustomCard = ({ value, color, title, isButton,form }) => {

    const showBtn = isButton;

    return (
        <>
            <div className=" mx-auto border-solid p-3 sm:p-4 lg:p-4 rounded-cl" style={{ backgroundColor: color }}>
                <h1 className='text-2xl text-light-black pb-2 font-semibold'>{title}</h1>

                {(title.toLowerCase() === "ingredients" || title.toLowerCase() === "category") && (
                    <div className="bg-white w-full p-1 sm:p-2 lg:p-2 rounded-nl">
                        {value.map((data, index) => (
                            <li key={index}>{data}</li>
                        ))}
                    </div>
                )}

                {title.toLowerCase() === "description" && (
                    <div className="bg-white w-full p-1 sm:p-2 lg:p-2 rounded-nl">
                        {value}
                    </div>
                )}

                {title.toLowerCase() === "title" && (
                    <div className="bg-white w-full p-1 sm:p-2 lg:p-2 rounded-nl">
                        {value}
                    </div>
                )}


            </div>


            {showBtn && (
                <div className="flex flex-row-reverse">
                    <CustomEditButton />
                </div>
            )}

            {/* <div className=" mx-auto border-solid p-3 sm:p-4 lg:p-4 rounded-cl" style={{ backgroundColor: color }}>
            <h1 className='text-2xl text-light-black pb-2 font-semibold'>{title}</h1>
            {title.toLowerCase() === "ingredients" && (
                <div className="bg-white w-full p-1 sm:p-2 lg:p-2 rounded-nl">
                    {value.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                    ))}
                </div>
            )}

            {showBtn && (
                <div className="flex flex-row-reverse">
                    <CustomEditButton />
                </div>
            )}
        </div> */}
        </>
    );
}

export default CustomCard;

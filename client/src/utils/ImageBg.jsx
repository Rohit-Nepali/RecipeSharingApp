import React from 'react';

const ImageBg = () => {
    const c1 = '#828282';
    const c2 = '#E8E8E8';

    return (
        <div style={{
            borderRadius: '16px',
            padding: '10px',
            background: `linear-gradient(to top, ${c1}, ${c2})`, // Example height, you can adjust as needed
        }}
        >
            
            <div className="flex flex-col items-center rounded-lg p-4 max-w-xs mx-auto">
                <div className="w-32 h-32 mb-2 ">
                    <img
                        src="gordon.png"
                        alt="Gordon D Ramsey"
                        className="rounded-full object-cover w-full h-full"
                    />
                </div>
                <h2 className="text-xl font-bold mb-1">Gordon D Ramsey</h2>
                <p className="text-l font-bold text-light-black">Cook</p>
            </div>
        </div>
    );
}

export default ImageBg;

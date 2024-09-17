import React from 'react';
import { Link } from 'react-router-dom';

const  GreenBtn = ({ value }) => (
    <button className="p-4 m-2 bg-[#4CEC14] text-white py-2 rounded-lg hover:bg-[#3Eb00F] transition duration-300 ">
        {value}
    </button>
);

export default GreenBtn;




import React, { useState } from 'react'

function EditBtn({ onSave, onCancel }) {

    const [showBtn, setShowbtn] = useState(false);

    const handleVisiblity = () => {
        setShowbtn(true);
    }

    const hideBtns = () => {
        setShowbtn(false);
    }

    return (
        <>
            <button type="button" onClick={handleVisiblity} style={showBtn ?{ display: 'none' } : { display: 'block' }} className="bg-green-400 text-white px-4 p-2 rounded-lg">
                Edit
            </button >
            {
                < div className='flex'>
                    <button type="button" style={showBtn ? { display: 'block' } : { display: 'none' }} onClick={onSave} className="bg-blue-500 text-white px-4 p-2  rounded-lg">
                        Save
                    </button>
                    <button type="button" onClick={hideBtns} style={showBtn ? { display: 'block' } : { display: 'none' }} className="bg-gray-500 text-white px-4 p-2  rounded-lg ml-2">
                        Cancel
                    </button>
                </div>
            }

        </>
    )
}

export default EditBtn



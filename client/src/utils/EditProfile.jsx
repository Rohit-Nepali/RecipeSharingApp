import React, { useState, useRef } from 'react';

function EditProfile({ onImgEdit }) {
  const [showBtn, setShowbtn] = useState(false);
  const fileInputRef = useRef(null);

  const handleVisiblity = () => {
    setShowbtn(true);
  };

  const hideBtns = () => {
    setShowbtn(false);
  };
  
  const handleOnImgChange = () => {

  }

  const triggerFileInput = () => {
    fileInputRef.current.click(); // Programmatically click the hidden file input
  };

  return (
    <>
      <button onClick={handleVisiblity} style={showBtn ? { display: 'none' } : { display: 'block' }} className="bg-green-400 text-white px-4 p-2 rounded-lg">
        Edit Picture
      </button>

      <div className="flex space-x-2">
        {/* Hidden file input */}
        {/* Only accept image files  */}
        <input type="file" ref={fileInputRef} onChange={handleOnImgChange} style={{ display: 'none' }} accept="image/*" />

        {/* Trigger when a file is selected */}
        <button onClick={triggerFileInput} style={showBtn ? { display: 'block' } : { display: 'none' }} className="bg-blue-400 text-white px-4 p-2 rounded-lg">
          Change Picture
        </button>

        <button onClick={hideBtns} style={showBtn ? { display: 'block' } : { display: 'none' }} className="bg-gray-400 text-white px-4 p-2 rounded-lg">
          Cancel
        </button>
      </div>
    </>
  );
}

export default EditProfile;



import React, { useState } from 'react'

function ProfileImage({ profileInfo }) {

    const [currentImg, setCurrentImg] = useState(profileInfo.baseInfo.imageUrl);
    const [imagePreivew, setImagePreview] = useState(currentImg);
    const [show, setShow] = useState(true);
    
    return (
        <>
            <div style={{ cursor: 'grab' }}>
                <img src={(show?imagePreivew:'default.jpg')}
                className='rounded-full p-2 mx-4 h-36'
                style={{ width: 'auto' }}
                />
            </div>
        </>
    )
}

export default ProfileImage

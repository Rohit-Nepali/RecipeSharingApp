import React from 'react'
import ProfileImage from './ProfileImage';

function ProfileBio({ profileInfo }) {
    return (
        <>
            <div className='flex justify-center items-center m-2'>
                <ProfileImage profileInfo={profileInfo} />
                <div className='flex justify-center items-start flex-col'>
                    <span className='text-2xl font-medium text-gray-700 px-2' >{profileInfo.baseInfo.firstName + " " + profileInfo.baseInfo.LastName}</span>
                    <span className='text-md font-medium text-gray-600 px-2' >{profileInfo.exprienceInfo.status}</span>
                    <span className='text-sm font-medium text-gray-500 px-2' >{profileInfo.baseInfo.age}, Male</span>
                </div>
            </div>
        </>
    )
}

export default ProfileBio

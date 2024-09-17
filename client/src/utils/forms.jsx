import React from 'react'

function ProfileForms({isActive,profileInfo,register}) {  
    return (
        <>
            <div className="col-span-6 sm:col-span-3 px-4">
                <label htmlFor="FirstName" className="block text-sm font-medium text-gray-700">First Name</label>
                {
                    (isActive ?
                        <input  {...register('FirstName')} id='FirstName' className="mt-1 p-2 w-full rounded-md border-gray-200 text-sm text-gray-700 shadow-md" placeholder={profileInfo.baseInfo.firstName} />
                        : <span>
                            {profileInfo.baseInfo.firstName}
                        </span>
                    )
                }
            </div>

            <div className="col-span-6 sm:col-span-3 px-4">
                <label htmlFor="LastName" className="block text-sm font-medium text-gray-700">Last Name</label>
                {
                    (isActive ?
                        <input  {...register('LastName')} id='LastName' className="mt-1 p-2 w-full rounded-md border-gray-200 text-sm text-gray-700 shadow-md" placeholder={profileInfo.baseInfo.LastName} />
                        : <span>
                            {profileInfo.baseInfo.LastName}
                        </span>
                    )
                }
            </div>

            <div className="col-span-6 sm:col-span-3 px-4">
                <label htmlFor="Age" className="block text-sm font-medium text-gray-700"> Age </label>
                {
                    (isActive ?
                        <input  {...register('Age')} id='Age' className="mt-1 p-2 rounded-md border-gray-500 text-sm text-gray-700 shadow-md" placeholder={profileInfo.baseInfo.age} />
                        : <span>
                            {profileInfo.baseInfo.age}
                        </span>
                    )
                }
            </div>
            <div className="col-span-6 sm:col-span-3 px-4">
                <label htmlFor="Email" className="block text-sm font-medium text-gray-700"> Email </label>
                {
                    (isActive ?
                        <input  {...register('Email')} id='Email' className="mt-1 p-2 rounded-md border-gray-500 text-sm text-gray-700 shadow-md" placeholder={profileInfo.professionalInfo.email} />
                        : <span>
                            {profileInfo.professionalInfo.email}
                        </span>
                    )
                }
            </div>
        </>
    )
}

export default ProfileForms

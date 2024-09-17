import React from 'react'
import { Controller, useForm } from 'react-hook-form';
import CustomEditButton from './CustomEditButton';

function SimpleForm({ color }) {

    const { register, control, handleSubmit } = useForm();

    const onSubmit = () => {
        console.log("Submitted")
    }
    return (
        <>
            <div className="max-w-md mx-auto border-solid p-3 sm:p-4 lg:p-4 rounded-cl" style={{ backgroundColor: color }}>
                <h1 className='text-2xl text-light-black pb-2 font-semibold  '>Info</h1>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor='username'> Username : </label>
                    <input {...register('username')} id='username' className='rounded-md p-1 w-full' />

                    <label htmlFor='email'> email : </label>
                    <input {...register('email')} id='email' className='rounded-md p-1 w-full' />

                    <label htmlFor='status'> status : </label>
                    <input {...register('status')} id='status' className='rounded-md p-1 w-full' />

                    <label htmlFor='contact'> Contact no : </label>
                    <input {...register('contact')} id='contact' className='rounded-md p-1 w-full' />
                </form>
                {/* button */}
                <div className="flex flex-row-reverse">
                    <CustomEditButton />
                </div>
            </div>

        </>
    )
}

export default SimpleForm

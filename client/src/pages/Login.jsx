import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import Form from '../components/Form';

function Login() {

    return (
        <>
            <main className="bg-[#7BFF4D] h-screen">
                <div className='flex border border-sky-700 w-1/2 '>
                    {/* image section */}
                    <div className='w-96 p-2'>
                        <img src="foof.png" alt="image of salad" />
                    </div>
                    <Form />
                </div>
            </main>
        </>
    )
}

export default Login

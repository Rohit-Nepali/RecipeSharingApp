import React from 'react'
import { useForm } from 'react-hook-form';

function Form() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log('Login Data:', data);
        // Here, you can handle the login logic, such as sending data to a server
    };
    return (
        <>
            <div >
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4">
                        <label className="block text-sm font-bold mb-2" htmlFor="username">Username</label>
                        <input
                            id="username"
                            type="text"
                            {...register('username', { required: 'Username is required' })}
                            className="w-full p-2 border rounded"
                        />
                        {errors.username && <p className="text-red-500 text-sm">{errors.username.message}</p>}
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
                        <input
                            id="password"
                            type="password"
                            {...register('password', { required: 'Password is required' })}
                            className="w-full p-2 border rounded"
                        />
                        {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
                        <button type="submit" className="w-full p-4 mt-4 bg-[#4CEC14] text-white font-bold py-2 rounded-lg hover:bg-[#3Eb00F] transition duration-300" >Log in</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Form

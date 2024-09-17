import React from 'react'
import ProfileImage from '../components/ProfileImage'
import { Link } from 'react-router-dom'

const Navbuttons = ({ children }) => (
    <div className="flex items-center space-x-3 text-gray-700 hover:bg-gray-100 rounded p-2">
        {children}
    </div>
);

export default function Sidebar() {
    return (
        <div className='relative'>
            <div className="w-64 bg-white sticky top-0 my-1 mx-3 h-screen flex flex-col shadow-md rounded-lg ">

                {/* profile section */}
                <div className="flex flex-col items-center">
                    <ProfileImage />
                    <span className=''>Username</span>
                </div>

                {/* divider */}
                <span className="flex items-center">
                    <span className=" m-6 h-px flex-1 bg-black"></span>
                </span>

                {/* navigation */}
                <nav className='flex flex-col items-center'>
                    <div className='' >
                        <Navbuttons className='h-8' >
                            <img src='Dashboardlayout.svg' className='h-8 max-w-full ' />
                            <Link to='/home' >Dashboard</Link>
                        </Navbuttons>

                        <Navbuttons>
                            <img src='Customer.svg' className='h-8 ' />
                            <Link to='/profile'>Manage Your Profile</Link>
                        </Navbuttons>

                        <Navbuttons>
                            <img src='Cookbook.svg' className='h-8 ' />
                            <Link to='/recipes'>Your Recipes</Link>
                        </Navbuttons>

                        <Navbuttons>
                            <img src='Mealplan.svg' className='h-8 ' />
                            <Link to='/home'>Meal Plans</Link>
                        </Navbuttons>
                    </div>

                    {/* add recipe btn */}
                    <button className='my-2'>
                        <Link to='/addRecipes' className="group relative inline-flex items-center overflow-hidden rounded-lg bg-[#4CEC14] px-8 py-3 m-2 text-white ">
                            <span className="absolute -start-full transition-all group-hover:start-4">
                                <svg className="size-5 rtl:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                                </svg>
                            </span>
                            <span className="text-sm font-medium transition-all group-hover:ms-4"> Add Recipe </span>
                        </Link>
                    </button>
                </nav>

                {/* divider */}
                <span className="flex items-center">
                    <span className="m-4 h-px flex-1 bg-black"></span>
                </span>

                {/* image */}
                <div className=" flex justify-center items-center m-3 ">
                    <img src="/girlImage.png" alt="" style={{ height: '125px' }} />
                </div>

                {/* logout btn */}
                <button className='my-2'>
                    <Link to='/login' className="group relative inline-flex items-center overflow-hidden rounded-lg bg-[#4CEC14] px-10 py-3 m-2 text-white ">
                        <span className="absolute -start-full transition-all group-hover:start-4">
                            <svg className="size-6 rtl:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a2 2 0 01-2 2H7a2 2 0 01-2-2V7a2 2 0 012-2h4a2 2 0 012 2v1" />
                            </svg>
                        </span>
                        <span className="text-sm font-medium transition-all group-hover:ms-4"> Log Out </span>
                    </Link>
                </button>
            </div>

        </div>
    )
}

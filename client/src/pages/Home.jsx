import React from 'react'
import GreenBtn from '../utils/GreenBtn';
import Card from '../components/Card';
import Headerdivider from '../utils/Headerdivider';
import { Outlet } from 'react-router-dom';
import SearchBar from '../utils/SearchBar';

function Home() {

  const categories = ['Breakfast', 'Lunch', 'Lunch', 'Dinner', 'Salads', 'Snacks'];

  const recipes = [
    { id: 1, name: 'Burger', category: 'Lunch, Appetizer', time: '40 min', rating: 5 },
    { id: 2, name: 'Burger', category: 'Lunch, Appetizer', time: '40 min', rating: 4 },
    { id: 3, name: 'Burger', category: 'Lunch, Appetizer', time: '40 min', rating: 5 },
    { id: 4, name: 'Burger', category: 'Lunch, Appetizer', time: '40 min', rating: 5 },
    { id: 5, name: 'Burger', category: 'Lunch, Appetizer', time: '40 min', rating: 5 },
  ];

  return (
    <>
      <div>
        {/* search section */}
        <main className="bg-white p-4 m-1 border rounded-lg">
          <div className="flex justify-items-start">
            <div className="relative">
              <SearchBar/>
            </div>

            <button className="p-2 border rounded-lg">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
              </svg>
            </button>
          </div>

          {/* divider */}
          <Headerdivider />

          {/* category buttons */}
          {categories.map((category, index) => (
            <GreenBtn value={category} key={index}  >
              {category}
            </GreenBtn>
          ))}

          {/* cards content data fetched from db */}
          <div >
            <Card />
          </div>
        </main>
      </div>
      <Outlet />
    </>
  )
}

export default Home

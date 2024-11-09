'use client'

import React, { useState } from 'react';
import Sidebar from '@/components/dashboard/Sidebar';
import Header1 from '@/components/dashboard/Header1';

interface FoodData {
  date: string;
  time: string;
  amount: number;
}

const Report: React.FC = () => {
  const [foodData, setFoodData] = useState<FoodData>({
    date: '',
    time: '',
    amount: 0,
  });

  const handleClickEvent = () => {
      alert("You have successfully updated your daily consumption!!")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFoodData((prev) => ({
      ...prev,
      [name]: name === 'amount' ? parseFloat(value) : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(foodData);
    // Here you could add functionality to submit the data to a backend
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-6">
        <Header1 />
        
        {/* Form Section */}
        <div className="mt-6 p-6 bg-white rounded-lg shadow-lg max-w-md mx-auto">
          <h2 className="text-xl font-semibold mb-4">Update Food Consumption</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700">Date:</label>
              <input
                type="date"
                name="date"
                value={foodData.date}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700">Time:</label>
              <input
                type="time"
                name="time"
                value={foodData.time}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700">Amount of Food (in kg):</label>
              <input
                type="number"
                name="amount"
                value={foodData.amount}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                required
                min="0"
                step="0.01"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
              onClick={handleClickEvent}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Report;

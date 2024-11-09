import React, { useState } from 'react';
import Sidebar from '@/components/dashboard/Sidebar';
import Header1 from '@/components/dashboard/Header1';

const Customer: React.FC = () => {
  const [menuItem, setMenuItem] = useState<string>('');
  const [isAvailable, setIsAvailable] = useState<'yes' | 'no'>('yes');

  const handleMenuItemChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMenuItem(e.target.value);
  };

  const handleAvailabilityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsAvailable(e.target.value as 'yes' | 'no');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic here
    console.log({ menuItem, isAvailable });
    // Reset form after submission if needed
    setMenuItem('');
    setIsAvailable('yes');
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-6">
        <Header1 />

        {/* Form Section */}
        <div className="mt-6 p-6 bg-white rounded-lg shadow-lg max-w-md mx-auto">
          <h2 className="text-xl font-semibold mb-4">Add Menu Item</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Menu Item Input */}
            <div>
              <label className="block text-gray-700">Menu Item:</label>
              <input
                type="text"
                name="menuItem"
                value={menuItem}
                onChange={handleMenuItemChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                required
              />
            </div>

            {/* Availability Options */}
            <div>
              <label className="block text-gray-700">Available:</label>
              <div className="flex items-center space-x-4 mt-2">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="isAvailable"
                    value="yes"
                    checked={isAvailable === 'yes'}
                    onChange={handleAvailabilityChange}
                    className="form-radio h-4 w-4 text-blue-600"
                  />
                  <span className="ml-2">Yes</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="isAvailable"
                    value="no"
                    checked={isAvailable === 'no'}
                    onChange={handleAvailabilityChange}
                    className="form-radio h-4 w-4 text-blue-600"
                  />
                  <span className="ml-2">No</span>
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
            >
              Add Item
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Customer;

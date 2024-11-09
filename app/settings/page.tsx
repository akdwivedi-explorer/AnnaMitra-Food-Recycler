'use client'

import React, { useState } from 'react';
import Sidebar from '@/components/dashboard/Sidebar';
import Header1 from '@/components/dashboard/Header1';

const Settings = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Toggle sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarOpen(prev => !prev);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar openSidebarToggle={isSidebarOpen} OpenSidebar={toggleSidebar} className={`transition-transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} fixed lg:static w-64 bg-gray-800 text-white`} />

      {/* Main content area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white shadow-md fixed w-full z-10 lg:static lg:w-auto">
          <Header1 OpenSidebar={toggleSidebar} />
        </header>

        {/* Settings content with scrollable area */}
        <main className="flex-1 bg-gray-100 pt-20 px-6 overflow-y-auto">
          <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Settings</h2>
            <div className="space-y-6">
              {/* Account Settings */}
              <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
                <h3 className="text-lg font-medium text-gray-700">Account Settings</h3>
                <p className="text-sm text-gray-600 mb-4">Manage your account information and settings.</p>
                <div className="space-x-4">
                  <button className="text-blue-600 hover:underline">Edit Profile</button>
                  <button className="text-blue-600 hover:underline">Change Password</button>
                  <button className="text-red-500 hover:underline">Delete Account</button>
                </div>
              </div>

              {/* Notification Settings */}
              <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
                <h3 className="text-lg font-medium text-gray-700">Notification Settings</h3>
                <p className="text-sm text-gray-600">Choose what notifications you’d like to receive and how.</p>
              </div>

              {/* Privacy Settings */}
              <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
                <h3 className="text-lg font-medium text-gray-700">Privacy Settings</h3>
                <p className="text-sm text-gray-600">Adjust your privacy preferences and control who sees your activity.</p>
              </div>

              {/* Theme Settings */}
              <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
                <h3 className="text-lg font-medium text-gray-700">Theme Settings</h3>
                <p className="text-sm text-gray-600">Switch between light and dark themes to suit your preference.</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Settings;

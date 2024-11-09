"use client";
import React, { useState } from 'react';
import SidebarN from '@/components/ngodashboard/SidebarN';
import Header1 from '@/components/dashboard/Header1';

interface NgomsgProps {
  messageBoxOpen: boolean;
  setMessageBoxOpen: (open: boolean) => void;
  openSidebarToggle: boolean;
  OpenSidebar: () => void;
  onPostMessageClick: () => void;
}

const Ngomsg: React.FC<NgomsgProps> = ({ 
  messageBoxOpen, 
  setMessageBoxOpen, 
  openSidebarToggle, 
  OpenSidebar, 
  onPostMessageClick 
}) => {
  const [message, setMessage] = useState<string>('');
  const [messages, setMessages] = useState<string[]>([]);

  const handlePostMessage = () => {
    if (message.trim()) {
      setMessages([...messages, message]);
      setMessage('');
      setMessageBoxOpen(false);
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <SidebarN 
        openSidebarToggle={openSidebarToggle} 
        OpenSidebar={OpenSidebar} 
        onPostMessageClick={onPostMessageClick} 
      />
      
      <div className="flex-1 flex flex-col ml-64"> {/* Adjusted to provide more space for sidebar */}
        {/* Header */}
        <Header1 OpenSidebar={OpenSidebar} />
        
        {/* Main Content */}
        <div className="flex-1 overflow-auto p-6">
          {messageBoxOpen && (
            <div className="bg-white p-6 rounded-lg shadow-lg mt-6 w-full max-w-lg mx-auto">
              <h2 className="text-xl font-bold text-gray-700 mb-4">Post Message</h2>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 mb-4"
                placeholder="Write your message here..."
                rows={4}
              />
              <button
                onClick={handlePostMessage}
                className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
              >
                Post Message
              </button>
            </div>
          )}

          {/* Message List */}
          <div className="mt-8 w-full max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">Request Food</h3>
            {/* Input fields for number of thaalis and date */}
            <div className="space-y-6">
              <div className="flex flex-col">
                <label htmlFor="numberOfThaalis" className="text-sm font-medium text-gray-700 mb-2">
                  Number of Thaalis
                </label>
                <input
                  id="numberOfThaalis"
                  type="number"
                  className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Enter number of thaalis"
                  min="1"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="requestDate" className="text-sm font-medium text-gray-700 mb-2">
                  Date
                </label>
                <input
                  id="requestDate"
                  type="date"
                  className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              {/* Button to submit the request */}
              <button
                onClick={() => console.log("Request submitted")}
                className="mt-6 w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors"
              >
                Request
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ngomsg;

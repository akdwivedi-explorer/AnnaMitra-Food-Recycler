import React, { useState } from 'react';
import SidebarN from '../ngodashboard/SidebarN';
import Header1 from '../dashboard/Header1';

interface NgomsgProps {
  messageBoxOpen: boolean;
  setMessageBoxOpen: (open: boolean) => void;
  openSidebarToggle: boolean;
  OpenSidebar: () => void;
  onPostMessageClick: () => void;
  onRequestSubmit: () => void; // Add this prop for request submission
}

const Ngomsg: React.FC<NgomsgProps> = ({ 
  messageBoxOpen, 
  setMessageBoxOpen, 
  openSidebarToggle, 
  OpenSidebar, 
  onPostMessageClick, 
  onRequestSubmit // Add this prop
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

  const handleRequestClick = () => {
    onRequestSubmit(); // Trigger the notification increment
    console.log("Request submitted");
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <SidebarN 
        openSidebarToggle={openSidebarToggle} 
        OpenSidebar={OpenSidebar} 
        onPostMessageClick={onPostMessageClick} 
      />
      <div className="flex-1 flex flex-col ml-0">
        <Header1 OpenSidebar={OpenSidebar} />
        <div className="flex-1 p-6 overflow-auto">
          {messageBoxOpen && (
            <div className="bg-white p-6 rounded-lg shadow-md mt-4 max-w-md mx-auto">
              <h2 className="text-xl font-semibold mb-4">Post Message</h2>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 mb-4"
                placeholder="Write your message here..."
                rows={4}
              />
              <button
                onClick={handlePostMessage}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
              >
                Post Message
              </button>
            </div>
          )}
          <div className="mt-8 bg-white p-6 rounded-lg shadow-md max-w-md mx-auto">
            <h3 className="text-lg font-semibold mb-4">Request Food</h3>
            <div className="space-y-4">
              <div className="flex flex-col">
                <label htmlFor="numberOfThaalis" className="text-sm font-medium text-gray-700 mb-2">
                  Number of Thaalis
                </label>
                <input
                  id="numberOfThaalis"
                  type="number"
                  className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
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
                  className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <button
                onClick={handleRequestClick}
                className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
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

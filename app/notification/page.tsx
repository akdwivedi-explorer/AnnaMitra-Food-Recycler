'use client'
import Header1 from '@/components/dashboard/Header1'
import Sidebar from '@/components/dashboard/Sidebar'
import React, { useState } from 'react'

const Notification = () => {
  // Hardcoded dummy requests for food
  const [requests, setRequests] = useState([
    { id: 1, ngo: 'NGO 1', thalis: 50, status: 'pending' },
    { id: 2, ngo: 'NGO 2', thalis: 30, status: 'pending' },
    { id: 3, ngo: 'NGO 3', thalis: 100, status: 'pending' },
    { id: 4, ngo: 'NGO 4', thalis: 25, status: 'pending' },
    { id: 5, ngo: 'NGO 5', thalis: 70, status: 'pending' },
  ])

  // Accept request handler
  const handleAccept = (id: number) => {
    setRequests(requests.map(req => req.id === id ? { ...req, status: 'accepted' } : req))
    alert('A delivery person has been assigned for this request!')
  }

  // Reject request handler
  const handleReject = (id: number) => {
    setRequests(requests.map(req => req.id === id ? { ...req, status: 'rejected' } : req))
    alert('We are sorry, the request has been rejected.')
  }

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar className="fixed top-0 left-0 w-64 h-full bg-gray-800 text-white z-10" />

      <div className="flex-1 ml-64">
        {/* Header */}
        <header className="bg-white text-black shadow-md fixed w-full h-16 flex justify-between px-6 z-20">
          <Header1 />
        </header>

        {/* Main Content */}
        <main className="p-6 mt-16 overflow-y-auto bg-gray-100 h-screen">
          <h2 className="text-xl font-semibold mb-4">Food Requests from NGOs</h2>
          <ul className="space-y-4">
            {requests.map(request => (
              <li key={request.id} className={`p-4 border rounded-md ${request.status === 'pending' ? 'bg-yellow-100' : request.status === 'accepted' ? 'bg-green-100' : 'bg-red-100'}`}>
                <p className="text-lg">{request.ngo} has requested {request.thalis} thalis.</p>
                <div className="mt-2 space-x-4">
                  {request.status === 'pending' && (
                    <>
                      <button 
                        className="px-4 py-2 bg-green-500 text-white rounded-md" 
                        onClick={() => handleAccept(request.id)}>
                        Accept
                      </button>
                      <button 
                        className="px-4 py-2 bg-red-500 text-white rounded-md" 
                        onClick={() => handleReject(request.id)}>
                        Reject
                      </button>
                    </>
                  )}
                  {request.status === 'accepted' && (
                    <span className="text-green-600 font-semibold">Accepted</span>
                  )}
                  {request.status === 'rejected' && (
                    <span className="text-red-600 font-semibold">Rejected</span>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </main>
      </div>
    </div>
  )
}

export default Notification

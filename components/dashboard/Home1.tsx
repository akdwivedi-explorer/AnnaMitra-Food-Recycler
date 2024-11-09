import React from 'react';
import {
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsFillBellFill,
} from 'react-icons/bs';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
} from 'recharts';

interface DataType {
  name: string;
  wasted: number;
  consumed: number;
  amt: number;
}

const Home1: React.FC = () => {
  const data: DataType[] = [
    { name: 'Month A', wasted: 4000, consumed: 2400, amt: 2400 },
    { name: 'Month B', wasted: 3000, consumed: 1398, amt: 2210 },
    { name: 'Month C', wasted: 2000, consumed: 9800, amt: 2290 },
    { name: 'Month D', wasted: 2780, consumed: 3908, amt: 2000 },
    { name: 'Month E', wasted: 1890, consumed: 4800, amt: 2181 },
    { name: 'Month F', wasted: 2390, consumed: 3800, amt: 2500 },
    { name: 'Month G', wasted: 3490, consumed: 4300, amt: 2100 },
  ];

  // Formatter for Y-axis to show values in 'K' for thousands
  const formatYAxis = (value: number) => `${value / 1000}Kg`;

  return (
    <main className="p-6 bg-gray-100 min-h-screen">
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-gray-800">DASHBOARD</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-4 rounded-lg shadow flex flex-col items-center">
          <div className="flex items-center mb-4 text-blue-600">
            <h3 className="text-lg font-semibold">FOOD SAVED</h3>
            <BsFillArchiveFill className="ml-2 text-2xl" />
          </div>
          <h1 className="text-3xl font-bold text-gray-700">300</h1>
        </div>
        <div className="bg-white p-4 rounded-lg shadow flex flex-col items-center">
          <div className="flex items-center mb-4 text-green-600">
            <h3 className="text-lg font-semibold">NGOs</h3>
            <BsFillGrid3X3GapFill className="ml-2 text-2xl" />
          </div>
          <h1 className="text-3xl font-bold text-gray-700">12</h1>
        </div>
        <div className="bg-white p-4 rounded-lg shadow flex flex-col items-center">
          <div className="flex items-center mb-4 text-purple-600">
            <h3 className="text-lg font-semibold">CUSTOMERS</h3>
            <BsPeopleFill className="ml-2 text-2xl" />
          </div>
          <h1 className="text-3xl font-bold text-gray-700">33</h1>
        </div>
        <div className="bg-white p-4 rounded-lg shadow flex flex-col items-center">
          <div className="flex items-center mb-4 text-red-600">
            <h3 className="text-lg font-semibold">ALERTS</h3>
            <BsFillBellFill className="ml-2 text-2xl" />
          </div>
          <h1 className="text-3xl font-bold text-gray-700">42</h1>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis tickFormatter={formatYAxis} />
              <Tooltip />
              <Legend />
              <Bar dataKey="consumed" fill="#8884d8" />
              <Bar dataKey="wasted" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis tickFormatter={formatYAxis} />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="consumed" stroke="#8884d8" activeDot={{ r: 8 }} />
              <Line type="monotone" dataKey="wasted" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </main>
  );
};

export default Home1;

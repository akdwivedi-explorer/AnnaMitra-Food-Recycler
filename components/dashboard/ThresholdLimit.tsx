import React, { useEffect } from 'react';

interface DataType {
  name: string;
  wasted: number;
  consumed: number;
  amt: number;
}

const ThresholdLimit: React.FC = () => {
  const data: DataType[] = [
    { name: 'Month A', wasted: 4000, consumed: 2400, amt: 2400 },
    { name: 'Month B', wasted: 3000, consumed: 1398, amt: 2210 },
    { name: 'Month C', wasted: 2000, consumed: 9800, amt: 2290 },
    { name: 'Month D', wasted: 2780, consumed: 3908, amt: 2000 },
    { name: 'Month E', wasted: 1890, consumed: 4800, amt: 2181 },
    { name: 'Month F', wasted: 2390, consumed: 3800, amt: 2500 },
    { name: 'Month G', wasted: 3490, consumed: 4300, amt: 2100 },
  ];

  // Calculate threshold
  const threshold = data.reduce((sum, item) => sum + item.consumed, 0) / data.length;

  // Alert if any month's consumption is below the threshold
  useEffect(() => {
    data.forEach((item) => {
      if (item.consumed < threshold) {
        alert(`Alert: In ${item.name}, ${item.wasted} amount was wasted due to low consumption.`);
      }
    });
  }, [data, threshold]);

  return (
    <div className="absolute bottom-6 right-6 flex items-center justify-center">
      <div className="w-24 h-24 flex items-center justify-center rounded-full bg-blue-500 text-white font-bold text-xl">
        {threshold.toFixed(2)}
      </div>
    </div>
  );
};

export default ThresholdLimit;

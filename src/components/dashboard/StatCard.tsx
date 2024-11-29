import React, { ReactNode } from 'react';

interface StatCardProps {
  title: string;
  value: number | string;
  icon: ReactNode;
  trend: string;
}

export const StatCard: React.FC<StatCardProps> = ({ title, value, icon, trend }) => {
  const isPositive = trend.startsWith('+');
  
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="p-2 bg-blue-50 rounded-lg">
          {icon}
        </div>
        <span className={`text-sm font-semibold ${
          isPositive ? 'text-green-500' : trend === '0' ? 'text-gray-500' : 'text-red-500'
        }`}>
          {trend}
        </span>
      </div>
      <h3 className="text-gray-600 text-sm mb-1">{title}</h3>
      <p className="text-2xl font-bold text-gray-800">{value}</p>
    </div>
  );
};
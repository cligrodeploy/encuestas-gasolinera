import React from 'react';
import { Bell, User } from 'lucide-react';

export const TopBar: React.FC = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="flex items-center justify-end px-4 sm:px-6 py-4">
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-gray-100 rounded-lg relative">
            <Bell size={20} />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
          
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium hidden sm:inline">Admin</span>
            <button className="p-2 hover:bg-gray-100 rounded-lg">
              <User size={20} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
import React from 'react';

interface NavbarProps {
  stationName: string;
}

export const Navbar: React.FC<NavbarProps> = ({ stationName }) => {
  return (
    <nav className="bg-blue-800 text-white p-4 shadow-lg fixed top-0 w-full z-10">
      <h1 className="text-xl font-bold text-center">{stationName}</h1>
    </nav>
  );
};
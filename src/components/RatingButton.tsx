import React from 'react';

interface RatingButtonProps {
  value: string;
  label: string;
  color: string;
  isSelected: boolean;
  onClick: () => void;
}

export const RatingButton: React.FC<RatingButtonProps> = ({
  value,
  label,
  color,
  isSelected,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`${
        isSelected ? `${color} text-white` : 'bg-white text-gray-700 border-2 border-gray-200'
      } rounded-lg py-4 px-4 font-semibold transition-all duration-200 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 w-full`}
    >
      {label}
    </button>
  );
};
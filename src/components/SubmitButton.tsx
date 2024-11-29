import React from 'react';
import { Send } from 'lucide-react';

interface SubmitButtonProps {
  onClick: (e: React.FormEvent) => void;
  isDisabled?: boolean;
}

export const SubmitButton: React.FC<SubmitButtonProps> = ({ onClick, isDisabled }) => {
  return (
    <button
      onClick={onClick}
      disabled={isDisabled}
      className={`w-full py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors duration-200 ${
        isDisabled
          ? 'bg-gray-400 cursor-not-allowed'
          : 'bg-blue-600 hover:bg-blue-700 text-white'
      }`}
    >
      <Send size={20} />
      Enviar
    </button>
  );
};
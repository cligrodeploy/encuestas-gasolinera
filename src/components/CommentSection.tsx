import React from 'react';

interface CommentSectionProps {
  value: string;
  onChange: (value: string) => void;
}

export const CommentSection: React.FC<CommentSectionProps> = ({ value, onChange }) => {
  return (
    <div className="mb-6">
      <label className="block text-gray-700 text-center mb-4 text-lg">
        ¿Tiene algún comentario adicional?
      </label>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full h-32 p-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
        placeholder="Escriba sus comentarios aquí..."
      />
    </div>
  );
};
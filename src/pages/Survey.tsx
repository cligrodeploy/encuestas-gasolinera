import React, { useState } from 'react';
import { Navbar } from '../components/survey/Navbar';
import { RatingButton } from '../components/survey/RatingButton';
import { CommentSection } from '../components/survey/CommentSection';
import { SubmitButton } from '../components/survey/SubmitButton';
import { StaffSelector } from '../components/survey/StaffSelector';

const RATINGS = [
  { value: 'malo', label: 'Malo', color: 'bg-red-500' },
  { value: 'bueno', label: 'Bueno', color: 'bg-blue-500' },
  { value: 'excelente', label: 'Excelente', color: 'bg-green-500' },
];

const Survey: React.FC = () => {
  const [rating, setRating] = useState<string>('');
  const [comment, setComment] = useState('');
  const [selectedStaff, setSelectedStaff] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!rating) return;
    
    console.log({ rating, comment, selectedStaff });
    setSubmitted(true);
    
    setTimeout(() => {
      setRating('');
      setComment('');
      setSelectedStaff('');
      setSubmitted(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-500 to-blue-700">
      <Navbar stationName="Gasolinera El Prado" />

      <div className="max-w-md mx-auto p-4 sm:p-6 pt-20">
        <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 mt-8">
          {submitted ? (
            <div className="text-center py-8">
              <h2 className="text-2xl font-bold text-green-600 mb-4">
                ¡Gracias por su opinión!
              </h2>
              <p className="text-gray-600">
                Su retroalimentación nos ayuda a mejorar nuestro servicio.
              </p>
            </div>
          ) : (
            <>
              <h2 className="text-xl sm:text-2xl font-bold text-center text-gray-800 mb-6 sm:mb-8">
                ¿Cómo calificaría nuestro servicio?
              </h2>

              <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-6 sm:mb-8">
                {RATINGS.map((option) => (
                  <RatingButton
                    key={option.value}
                    {...option}
                    isSelected={rating === option.value}
                    onClick={() => setRating(option.value)}
                  />
                ))}
              </div>

              <StaffSelector 
                selectedStaff={selectedStaff}
                onSelect={setSelectedStaff}
              />

              <CommentSection value={comment} onChange={setComment} />

              <SubmitButton onClick={handleSubmit} isDisabled={!rating} />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Survey;
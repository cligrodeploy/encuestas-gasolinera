import React, { useState, useRef, useEffect } from 'react';

interface StaffMember {
  id: string;
  name: string;
  image: string;
  role: string;
}

interface StaffSelectorProps {
  selectedStaff: string;
  onSelect: (staffId: string) => void;
}

const STAFF_MEMBERS: StaffMember[] = [
  {
    id: '1',
    name: 'Carlos Rodríguez',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    role: 'Despachador'
  },
  {
    id: '2',
    name: 'Ana García',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    role: 'Despachadora'
  },
  {
    id: '3',
    name: 'Miguel Torres',
    image: 'https://randomuser.me/api/portraits/men/55.jpg',
    role: 'Despachador'
  },
  {
    id: '4',
    name: 'Laura Méndez',
    image: 'https://randomuser.me/api/portraits/women/68.jpg',
    role: 'Despachadora'
  }
];

export const StaffSelector: React.FC<StaffSelectorProps> = ({ selectedStaff, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedMember = STAFF_MEMBERS.find(s => s.id === selectedStaff);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="mb-8">
      <label className="block text-gray-700 text-center mb-4 text-lg">
        ¿Quién le atendió? (Opcional)
      </label>
      <div className="relative" ref={dropdownRef}>
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="w-full p-3 pl-4 border-2 border-gray-200 rounded-lg bg-white text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          {selectedMember ? (
            <div className="flex items-center gap-3">
              <img
                src={selectedMember.image}
                alt={selectedMember.name}
                className="w-10 h-10 rounded-full object-cover border-2 border-blue-500"
              />
              <span>{selectedMember.name} - {selectedMember.role}</span>
            </div>
          ) : (
            <span className="text-gray-500">Seleccione una persona</span>
          )}
          <svg 
            className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {isOpen && (
          <div className="absolute z-10 w-full mt-2 bg-white border-2 border-gray-200 rounded-lg shadow-lg max-h-60 overflow-y-auto">
            <div 
              className="p-2 hover:bg-blue-50 cursor-pointer flex items-center gap-3"
              onClick={() => {
                onSelect('');
                setIsOpen(false);
              }}
            >
              <span className="text-gray-500">Ninguna selección</span>
            </div>
            {STAFF_MEMBERS.map((staff) => (
              <div
                key={staff.id}
                className="p-2 hover:bg-blue-50 cursor-pointer flex items-center gap-3"
                onClick={() => {
                  onSelect(staff.id);
                  setIsOpen(false);
                }}
              >
                <img
                  src={staff.image}
                  alt={staff.name}
                  className="w-10 h-10 rounded-full object-cover border-2 border-blue-500"
                />
                <span>{staff.name} - {staff.role}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
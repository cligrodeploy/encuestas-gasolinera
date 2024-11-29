import React from 'react';
import { DashboardLayout } from '../components/layouts/DashboardLayout';
import { UserPlus } from 'lucide-react';

const Workers: React.FC = () => {
  const workers = [
    { 
      id: 1, 
      name: 'Carlos Rodríguez', 
      station: 'El Prado', 
      role: 'Despachador',
      rating: 4.8,
      surveys: 320,
      image: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    { 
      id: 2, 
      name: 'Ana García', 
      station: 'La Central', 
      role: 'Despachadora',
      rating: 4.6,
      surveys: 280,
      image: 'https://randomuser.me/api/portraits/women/44.jpg'
    },
  ];

  return (
    <DashboardLayout>
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Trabajadores</h1>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700">
            <UserPlus size={20} />
            <span>Nuevo Trabajador</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {workers.map((worker) => (
            <div key={worker.id} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={worker.image}
                  alt={worker.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-blue-500"
                />
                <div>
                  <h3 className="font-semibold text-lg">{worker.name}</h3>
                  <p className="text-gray-600">{worker.role}</p>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Estación:</span>
                  <span className="font-medium">{worker.station}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Calificación:</span>
                  <span className="font-medium">{worker.rating}/5.0</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Encuestas:</span>
                  <span className="font-medium">{worker.surveys}</span>
                </div>
              </div>

              <div className="mt-4 flex gap-2">
                <button className="flex-1 bg-blue-100 text-blue-600 px-4 py-2 rounded hover:bg-blue-200">
                  Editar
                </button>
                <button className="flex-1 bg-red-100 text-red-600 px-4 py-2 rounded hover:bg-red-200">
                  Desactivar
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Workers;
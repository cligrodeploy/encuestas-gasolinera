import React from 'react';
import { DashboardLayout } from '../components/layouts/DashboardLayout';
import { PlusCircle, MapPin, Users, Star } from 'lucide-react';

const Stations: React.FC = () => {
  const stations = [
    {
      id: 1,
      name: 'Gasolinera El Prado',
      address: 'Av. Principal #123',
      workers: 8,
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1542367235-d0f3b564d16d?auto=format&fit=crop&q=80&w=400'
    },
    {
      id: 2,
      name: 'Gasolinera La Central',
      address: 'Calle Central #456',
      workers: 6,
      rating: 4.5,
      image: 'https://images.unsplash.com/photo-1613741125309-20123e9cd355?auto=format&fit=crop&q=80&w=400'
    }
  ];

  return (
    <DashboardLayout>
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Estaciones</h1>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700">
            <PlusCircle size={20} />
            <span>Nueva Estación</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {stations.map((station) => (
            <div key={station.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={station.image}
                alt={station.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{station.name}</h3>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin size={18} />
                    <span>{station.address}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-gray-600">
                    <Users size={18} />
                    <span>{station.workers} trabajadores</span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-gray-600">
                    <Star size={18} />
                    <span>{station.rating}/5.0</span>
                  </div>
                </div>

                <div className="mt-4 flex gap-2">
                  <button className="flex-1 bg-blue-100 text-blue-600 px-4 py-2 rounded hover:bg-blue-200">
                    Editar
                  </button>
                  <button className="flex-1 bg-gray-100 text-gray-600 px-4 py-2 rounded hover:bg-gray-200">
                    Ver Detalles
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Stations;
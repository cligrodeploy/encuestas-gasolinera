import React from 'react';
import { StatCard } from '../components/dashboard/StatCard';
import { WorkerStats } from '../components/dashboard/WorkerStats';
import { DashboardLayout } from '../components/layouts/DashboardLayout';
import { PieChart, Users, Fuel, Star } from 'lucide-react';

const Dashboard: React.FC = () => {
  // Mock data - In a real app, this would come from an API
  const stats = {
    totalSurveys: 1250,
    averageRating: 4.5,
    totalWorkers: 24,
    totalStations: 3
  };

  return (
    <DashboardLayout>
      <div className="p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Panel de Control</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <StatCard 
            title="Total Encuestas"
            value={stats.totalSurveys}
            icon={<PieChart className="text-blue-500" />}
            trend="+12.5%"
          />
          <StatCard 
            title="Calificación Promedio"
            value={stats.averageRating}
            icon={<Star className="text-yellow-500" />}
            trend="+0.8%"
          />
          <StatCard 
            title="Total Trabajadores"
            value={stats.totalWorkers}
            icon={<Users className="text-green-500" />}
            trend="+2"
          />
          <StatCard 
            title="Total Estaciones"
            value={stats.totalStations}
            icon={<Fuel className="text-purple-500" />}
            trend="0"
          />
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Estadísticas por Trabajador
          </h2>
          <WorkerStats />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
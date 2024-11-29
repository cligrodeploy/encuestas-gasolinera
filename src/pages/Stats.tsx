import React from 'react';
import { DashboardLayout } from '../components/layouts/DashboardLayout';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Stats: React.FC = () => {
  const monthlyData = [
    { month: 'Ene', surveys: 150, rating: 4.5 },
    { month: 'Feb', surveys: 180, rating: 4.6 },
    { month: 'Mar', surveys: 220, rating: 4.7 },
    { month: 'Abr', surveys: 240, rating: 4.8 },
    { month: 'May', surveys: 260, rating: 4.6 },
    { month: 'Jun', surveys: 280, rating: 4.7 },
  ];

  const ratingDistribution = [
    { name: 'Malo', value: 50 },
    { name: 'Bueno', value: 150 },
    { name: 'Excelente', value: 300 },
  ];

  return (
    <DashboardLayout>
      <div className="p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Estadísticas</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Encuestas por Mes */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-4">Encuestas por Mes</h2>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="surveys" fill="#3B82F6" name="Encuestas" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Calificación Promedio */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-4">Calificación Promedio</h2>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis domain={[0, 5]} />
                  <Tooltip />
                  <Line type="monotone" dataKey="rating" stroke="#3B82F6" name="Calificación" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Distribución de Calificaciones */}
          <div className="bg-white p-6 rounded-lg shadow-md lg:col-span-2">
            <h2 className="text-lg font-semibold mb-4">Distribución de Calificaciones</h2>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={ratingDistribution}
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    fill="#3B82F6"
                    dataKey="value"
                    nameKey="name"
                    label
                  />
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Stats;
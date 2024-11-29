import React, { useState } from 'react';
import { Home, Users, Fuel, UserCircle, BarChart3, Settings, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const menuItems = [
  { icon: Home, label: 'Inicio', href: '/dashboard' },
  { icon: BarChart3, label: 'Estadísticas', href: '/stats' },
  { icon: Users, label: 'Trabajadores', href: '/workers' },
  { icon: Fuel, label: 'Gasolineras', href: '/stations' },
  { icon: UserCircle, label: 'Usuarios', href: '/users' },
  { icon: Settings, label: 'Configuración', href: '/settings' },
];

export const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-20 p-2 bg-white rounded-lg shadow-md"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <aside className={`
        fixed lg:static inset-y-0 left-0 z-10
        transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
        lg:translate-x-0 transition-transform duration-200 ease-in-out
        w-64 bg-white h-screen shadow-md
      `}>
        <div className="p-4">
          <h2 className="text-xl font-bold text-blue-600 mb-8">Gas Station Admin</h2>
          <nav>
            {menuItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 p-3 text-gray-700 hover:bg-blue-50 rounded-lg mb-1 transition-colors"
              >
                <item.icon size={20} />
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>
        </div>
      </aside>
    </>
  );
};
import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-700 text-white shadow-lg py-4">
      <div className="container mx-auto flex justify-between items-center px-6">
        <div className="flex space-x-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `px-4 py-2 rounded-md text-lg font-medium text-white ${
                isActive ? 'bg-blue-500' : 'hover:bg-blue-600'
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/pastes"
            className={({ isActive }) =>
              `px-4 py-2 rounded-md text-lg font-medium text-white ${
                isActive ? 'bg-blue-500' : 'hover:bg-blue-600'
              }`
            }
          >
            Pastes
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;



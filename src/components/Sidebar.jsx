import { FaHome, FaClipboardList, FaFileAlt } from "react-icons/fa";
import { useState } from "react";
import { NavLink } from "react-router-dom";


const Sidebar = () => {
      const menuClass = ({ isActive }) =>
        `flex cursor-pointer items-center rounded-xl p-4  space-x-2
        ${isActive ? 
            "text-hijau bg-green-200 font-extrabold" : 
            "text-gray-600 hover:text-hijau hover:bg-green-200 hover:font-extrabold"
        }`
  return (
    
    <div className="w-64 bg-white min-h-screen shadow p-4">

      {/* LOGO */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold">
          Sedap<span className="text-green-500">.</span>
        </h1>
        <p className="text-gray-400 text-sm">Modern Admin Dashboard</p>
      </div>

      {/* MENU */}
      <ul className="space-y-4">
        
        <li>
          <NavLink
          onClick={() => setActive("dashboard")}
          to="/"
          className={menuClass}
        >
          <FaHome /> Dashboard
          </NavLink>
        </li>

        <li>
          <NavLink
          onClick={() => setActive("order")}
          to="/orders"
          className={menuClass}
        >
          <FaClipboardList /> Order List
          </NavLink>
        </li>

        <li>
          <NavLink
          onClick={() => setActive("Customer")}
          to="/customer"
          className={menuClass}
        >
          <FaFileAlt /> Customer
          </NavLink>
        </li>

        <li>
          <NavLink
          onClick={() => setActive("Products")}
          to="/Products"
          className={menuClass}
        >
          <FaFileAlt /> Products
          </NavLink>
        </li>

        <li>
          <NavLink
          onClick={() => setActive("Components")}
          to="/components"
          className={menuClass}
        >
          <FaFileAlt /> Components
          </NavLink>
        </li>

         <li>
          <NavLink
          onClick={() => setActive("FiturXyz")}
          to="/FiturXyz"
          className={menuClass}
        >
          <FaFileAlt /> FiturXyz
          </NavLink>
        </li>

        <li>
          <NavLink
          onClick={() => setActive("Note")}
          to="/Note"
          className={menuClass}
        >
          <FaFileAlt /> Note
          </NavLink>
        </li>

      </ul>
      <div className="mt-8">
        <p className="text-gray-400 text-xs mb-2">ERROR PAGES</p>

        <ul className="space-y-3">
          <li>
            <NavLink to="/error-400" className={menuClass}>
             <span>Error 400</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/error-401" className={menuClass}>
             <span>Error 401</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/error-403" className={menuClass}>
             <span>Error 403</span>
            </NavLink>
          </li>
        </ul>
      </div>

      {/* CARD */}
      <div className="mt-10 bg-green-500 text-white p-4 rounded-lg">
        <p className="text-sm mb-3">
          Please organize your menus through button below!
        </p>
        <button className="bg-white text-green-500 px-3 py-1 rounded">
          + Add Menu
        </button>
      </div>

    </div>
  );
};

export default Sidebar;
// src/components/Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-green-500 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center py-4">
        <Link to="/">
        <div className="flex flex-col items-start">
        <h1 className="text-2xl font-bold text-white flex items-start">
            GlobePorter
            <span className="ml-1 text-[10px] border px-1 rounded-sm align-super">
            TM
            </span>
        </h1>
        <h2 className="text-white text-sm">Your Delivery, Our Priority</h2>
        </div>
        </Link>



        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 text-white font-medium">
          <Link to="/enterprise">For Enterprise</Link>
          <Link to="/driver">Driver Partner</Link>
          <Link to="/support">Support</Link>
          <Link to="/blogs">Blogs</Link>
          <Link to="/enquiry">Enquiry</Link>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-6 py-4 space-y-4">
          <Link
            to="/"
            className="block text-gray-700 hover:text-blue-600"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/enterprise"
            className="block text-gray-700 hover:text-blue-600"
            onClick={() => setIsOpen(false)}
          >
            For Enterprise
          </Link>
          <Link
            to="/driver"
            className="block text-gray-700 hover:text-blue-600"
            onClick={() => setIsOpen(false)}
          >
            Driver Partner
          </Link>
          <Link
            to="/support"
            className="block text-gray-700 hover:text-blue-600"
            onClick={() => setIsOpen(false)}
          >
            Support
          </Link>
          <Link
            to="/enquiry"
            className="block text-gray-700 hover:text-blue-600"
            onClick={() => setIsOpen(false)}
          >
            Enquiry
          </Link>
        </div>
      )}
    </header>
  );
}

export default Navbar;

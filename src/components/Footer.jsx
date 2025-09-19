import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-green-300 text-black mt-auto pb-0">
      <div className="max-w-7xl mx-auto px-4 py-10 md:py-14">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          
          {/* About Section */}
          <div>
            <h1 className="text-2xl font-bold flex items-center">
              GlobePorter
              <span className="ml-1 text-[10px] border px-1 rounded-sm align-super">
                TM
              </span>
            </h1>
            <p className="text-sm mt-3 leading-relaxed">
              Fast, reliable, and hassle-free logistics solutions 
              right at your doorstep. Delivering trust with every move.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:underline">Home</Link></li>
              <li><Link to="/services" className="hover:underline">Services</Link></li>
              <li><Link to="/enquiry" className="hover:underline">Enquiry</Link></li>
              <li><Link to="/about" className="hover:underline">About Us</Link></li>
              <li><Link to="/contact" className="hover:underline">Contact</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-bold mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/terms" className="hover:underline">Terms & Conditions</Link></li>
              <li><Link to="/privacypolicy" className="hover:underline">Privacy & Policy</Link></li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <p className="text-sm">
              <a href="mailto:support@globeporter.com" className="hover:underline">
                support@globeporter.com
              </a>
            </p>
            <p className="text-sm">
              <a href="tel:+911234567890" className="hover:underline">
                +91 12345 67890
              </a>
            </p>
            <p className="text-sm">Mumbai, India</p>

            {/* Social Icons */}
            <div className="flex space-x-4 mt-4 text-lg">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600">
                <FaFacebookF />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600">
                <FaTwitter />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600">
                <FaInstagram />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Divider */}
        <hr className="my-6 border-gray-400" />

        {/* Copyright */}
        <p className="text-center text-sm">
          &copy; {new Date().getFullYear()} GlobePorter. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;

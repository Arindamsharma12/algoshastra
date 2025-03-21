import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <p>&copy; 2025 Your Company. All rights reserved.</p>
        <div className="mt-4">
          <a href="#" className="text-gray-400 hover:text-white mx-3">Privacy Policy</a>
          <a href="#" className="text-gray-400 hover:text-white mx-3">Terms of Service</a>
          <a href="#" className="text-gray-400 hover:text-white mx-3">Contact</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

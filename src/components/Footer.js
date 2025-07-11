import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-center p-4 rounded-t-xl mt-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
          {/* Company Info */}
          <div className="text-left">
            <h3 className="text-lg font-semibold mb-3">Contracte Juridice</h3>
            <p className="text-gray-400 text-sm">
              Platforma ta de încredere pentru modele de contracte juridice profesionale.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="text-left">
            <h3 className="text-lg font-semibold mb-3">Link-uri Rapide</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="/contracte" className="hover:text-white transition duration-300">Contracte</a></li>
              <li><a href="/despre" className="hover:text-white transition duration-300">Despre Noi</a></li>
              <li><a href="/faq" className="hover:text-white transition duration-300">FAQ</a></li>
              <li><a href="/contact" className="hover:text-white transition duration-300">Contact</a></li>
            </ul>
          </div>
          
          {/* Legal */}
          <div className="text-left">
            <h3 className="text-lg font-semibold mb-3">Legal</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="/termeni" className="hover:text-white transition duration-300">Termeni și Condiții</a></li>
              <li><a href="/politica-confidentialitate" className="hover:text-white transition duration-300">Politica de Confidențialitate</a></li>
              <li><a href="/gdpr" className="hover:text-white transition duration-300">GDPR</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-4">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Contracte Juridice. Toate drepturile rezervate.
          </p>
        </div>
      </div>
    </footer>
  );
};
// src/components/Contact.js
import React from 'react';

export default function Contact() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Contacto</h1>
      <p className="text-lg text-gray-600 text-center">
        Para más información, contacta con nosotros en 
        <a href="mailto:info@juego.com" className="text-blue-500 hover:text-blue-600 underline ml-1">
          info@juego.com
        </a>
      </p>
    </div>
  );
  
}

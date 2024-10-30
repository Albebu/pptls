// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
        Bienvenido al juego "Piedra, Papel, Tijera, Lagarto, Spock"
      </h1>
      <Link to="/game">
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition-all">
          Comenzar Juego
        </button>
      </Link>
    </div>
  );
  
}

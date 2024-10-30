// src/components/GameControls.js
import React from 'react';

export default function GameControls({ onReset }) {
  return (
    <button onClick={onReset}>
      Reiniciar Juego
    </button>
  );
}

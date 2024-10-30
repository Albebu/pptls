// src/components/ResultDisplay.js
import React from 'react';

export default function ResultDisplay({ playerChoice, computerChoice, result }) {
  return (
    <div>
      <p>Tu elección: {playerChoice ? playerChoice.emoji : '-'}</p>
      <p>Elección del computador: {computerChoice ? computerChoice.emoji : '-'}</p>
      <h2>Resultado: {result}</h2>
    </div>
  );
}

import useChoices from './hooks/useChoices'// src/Game.js
import React from 'react';
import OptionButton from './components/OptionButton';
import ResultDisplay from './components/ResultDisplay';
import MessageDisplay from './components/MessageDisplay';
import GameControls from './components/GameControls';
import options from './data/options';

export default function Game() {
  const { playerChoice, computerChoice, result, handlePlayerChoice } = useChoices();

  const resetGame = () => {
    window.location.reload();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        Piedra, Papel, Tijera, Lagarto, Spock
      </h1>
      <div className="flex gap-4 mb-6">
        {options.map((option) => (
          <OptionButton
            key={option.id}
            option={option}
            onSelect={handlePlayerChoice}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
          />
        ))}
      </div>
      <div className="mb-6">
        <ResultDisplay
          playerChoice={playerChoice}
          computerChoice={computerChoice}
          result={result}
        />
      </div>
      <GameControls onReset={resetGame} className="mt-4" />
    </div>
  );
  
}

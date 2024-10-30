// src/hooks/useChoices.js
import { useState } from 'react';
import options from '../data/options';

export default function useChoices() {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState('');

  const getRandomChoice = () => {
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
  };

  const getResult = (player, computer) => {
    if (player.id === computer.id) return "Empate";
    return player.defeats.includes(computer.id) ? "Ganaste" : "Perdiste";
  };

  const handlePlayerChoice = (choice) => {
    const computer = getRandomChoice();
    const gameResult = getResult(choice, computer);
    setPlayerChoice(choice);
    setComputerChoice(computer);
    setResult(gameResult);
  };

  return {
    playerChoice,
    computerChoice,
    result,
    handlePlayerChoice
  };
}

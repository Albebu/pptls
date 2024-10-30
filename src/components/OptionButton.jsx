// src/components/OptionButton.js
import React from 'react';

export default function OptionButton({ option, onSelect }) {
  return (
    <button onClick={() => onSelect(option)}>
      {option.emoji} {option.name}
    </button>
  );
}

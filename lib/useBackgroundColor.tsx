import { useState, useEffect } from 'react';

const colorSchemes = [
  { bg: 'bg-gradient-to-r from-purple-600 to-indigo-600', text: 'text-white' },
  { bg: 'bg-gradient-to-r from-emerald-500 to-teal-500', text: 'text-white' },
  { bg: 'bg-gradient-to-r from-yellow-400 to-orange-500', text: 'text-black' },
  { bg: 'bg-gradient-to-r from-pink-500 to-rose-500', text: 'text-white' },
  { bg: 'bg-gradient-to-r from-blue-400 to-cyan-500', text: 'text-white' },
];

export function useBackgroundColor() {
  const [colorIndex, setColorIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((prevIndex) => (prevIndex + 1) % colorSchemes.length);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return colorSchemes[colorIndex];
}
import { useState } from 'react';
import type { Pokemon } from '../types';

export const useSquad = () => {
   const [squad, setSquad] = useState<Pokemon[]>([]);

   const addToSquad = (pokemon: Pokemon) => {
      if (squad.includes(pokemon) || squad.length >= 6) return;
      setSquad([...squad, pokemon]);
   };

   const removeFromSquad = (pokemon: Pokemon) => {
      setSquad(squad.filter(p => p !== pokemon));
   };

   return { squad, addToSquad, removeFromSquad };
};
import { render, screen, fireEvent } from '@testing-library/react';
import PokemonCard from '../../components/PokemonCard';
import type { Pokemon } from '../../types';

describe('PokemonCard - Add to Squad Button', () => {
   const mockPokemon: Pokemon = {
      name: 'pikachu',
      url: 'https://pokeapi.co/api/v2/pokemon/25/',
      details: {
         id: 25,
         name: 'pikachu',
         sprites: { front_default: 'https://pokeapi.co/pikachu.png' },
         types: [{ slot: 1, type: { name: 'electric', url: 'https://pokeapi.co/api/v2/type/electric/' } }],
         abilities: [
         { ability: { name: 'static', url: 'https://pokeapi.co/api/v2/ability/static/' }, is_hidden: false, slot: 1 },
         ],
         stats: [],
      },
   };

   test('clicking Add to Squad button calls onAddToSquad', () => {
      const onAddToSquad = jest.fn();
      const onRemoveFromSquad = jest.fn();

      render(
         <PokemonCard
         pokemon={mockPokemon}
         isSelected={false}
         onSelect={() => {}}
         isInSquad={false}
         onAddToSquad={onAddToSquad}
         onRemoveFromSquad={onRemoveFromSquad}
         />
      );

      const addButton = screen.getByText('Add to Squad');
      expect(addButton).toBeInTheDocument();

      fireEvent.click(addButton);
      expect(onAddToSquad).toHaveBeenCalledWith(mockPokemon);
      expect(onAddToSquad).toHaveBeenCalledTimes(1);
      expect(onRemoveFromSquad).not.toHaveBeenCalled();
   });
});
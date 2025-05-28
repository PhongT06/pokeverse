import { render, screen } from '@testing-library/react';
import PokemonCard from '../../components/PokemonCard';
import type { Pokemon } from '../../types';

describe('PokemonCard', () => {
   const mockPokemon: Pokemon = {
      name: 'pikachu',
      url: 'https://pokeapi.co/api/v2/pokemon/25/',
      details: {
         id: 25,
         name: 'pikachu',
         sprites: { front_default: 'https://pokeapi.co/pikachu.png' },
         types: [{ slot: 1, type: { name: 'electric', url: 'https://pokeapi.co/api/v2/type/electric/' } }],
         abilities: [{ ability: { name: 'static', url: 'https://pokeapi.co/api/v2/ability/static/' }, is_hidden: false, slot: 1 }],
         stats: [
         { base_stat: 35, effort: 0, stat: { name: 'hp', url: 'https://pokeapi.co/api/v2/stat/hp/' } },
         { base_stat: 55, effort: 0, stat: { name: 'attack', url: 'https://pokeapi.co/api/v2/stat/attack/' } },
         { base_stat: 40, effort: 0, stat: { name: 'defense', url: 'https://pokeapi.co/api/v2/stat/defense/' } },
         { base_stat: 90, effort: 0, stat: { name: 'speed', url: 'https://pokeapi.co/api/v2/stat/speed/' } },
         ],
      },
   };

   const defaultProps = {
      pokemon: mockPokemon,
      isSelected: false,
      onSelect: () => {},
      isInSquad: false,
      onAddToSquad: () => {},
      onRemoveFromSquad: () => {},
   };

   test('renders Pokémon details correctly', () => {
      render(<PokemonCard {...defaultProps} />);

      expect(screen.getByText('Pikachu')).toBeInTheDocument();
      expect(screen.getByText('Type: Electric')).toBeInTheDocument();
      expect(screen.getByText('Abilities: Static')).toBeInTheDocument();
      expect(screen.getByText('HP: 35')).toBeInTheDocument();
      expect(screen.getByText('Attack: 55')).toBeInTheDocument();
      expect(screen.getByText('Defense: 40')).toBeInTheDocument();
      expect(screen.getByText('Speed: 90')).toBeInTheDocument();
      expect(screen.getByText('Select')).toBeInTheDocument();
      expect(screen.getByText('Add to Squad')).toBeInTheDocument();
   });
});
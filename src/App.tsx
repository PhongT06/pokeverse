import { useState, useEffect } from 'react';
import type { Pokemon, PokemonResponse } from './types';
import { Grid, Box, Typography } from '@mui/material';
import PokemonCard from './components/PokemonCard';
import ComparisonSection from './components/ComparisonSection';
import './App.css';

function App() {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon[]>([]);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
        const data: PokemonResponse = await response.json();

        const detailedPokemon = await Promise.all(
          data.results.map(async (pokemon) => {
            const detailResponse = await fetch(pokemon.url);
            const detailData = await detailResponse.json();
            return { ...pokemon, details: detailData };
          })
        );

        setPokemonList(detailedPokemon);
      } catch (error) {
        console.error('Error fetching Pokémon:', error);
      }
    };

    fetchPokemon();
  }, []);

  const handleSelectPokemon = (pokemon: Pokemon) => {
    if (selectedPokemon.includes(pokemon)) {
      setSelectedPokemon(selectedPokemon.filter(p => p !== pokemon));
    } else if (selectedPokemon.length < 2) {
      setSelectedPokemon([...selectedPokemon, pokemon]);
    } else {
      setSelectedPokemon([selectedPokemon[1], pokemon]);
    }
  };

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4" gutterBottom>
        Pokeverse | All Pokémon
      </Typography>
      <ComparisonSection selectedPokemon={selectedPokemon} />
      <Grid container spacing={2}>
        {pokemonList.map((pokemon, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            key={index}
            component="div"
          >
            <PokemonCard
              pokemon={pokemon}
              isSelected={selectedPokemon.includes(pokemon)}
              onSelect={handleSelectPokemon}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default App;
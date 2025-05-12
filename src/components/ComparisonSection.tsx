import React from 'react';
import type { Pokemon } from '../types';
import { Box, Typography } from '@mui/material';
import { getTypeColor } from '../utils/typeColors';

interface ComparisonSectionProps {
   selectedPokemon: Pokemon[];
}

const ComparisonSection: React.FC<ComparisonSectionProps> = ({ selectedPokemon }) => {
   if (selectedPokemon.length === 0) return null;

   return (
      <Box sx={{ marginBottom: 2, textAlign: 'center' }}>
         <Typography variant="h6" gutterBottom>
            Comparing Pokémon
         </Typography>
         <Box sx={{ display: 'flex', justifyContent: 'center', gap: 4, flexWrap: 'wrap' }}>
            {selectedPokemon.map((pokemon, idx) => {
               const primaryType = pokemon.details?.types[0]?.type.name || 'normal';
               const secondaryType = pokemon.details?.types[1]?.type.name;
               const typeDisplay = secondaryType ? `${primaryType}/${secondaryType}` : primaryType;
               const abilitiesDisplay = pokemon.details?.abilities
                  .map(ability => ability.ability.name.charAt(0).toUpperCase() + ability.ability.name.slice(1))
                  .join(', ') || 'N/A';
               const backgroundColor = getTypeColor(primaryType);

               return (
                  <Box
                     key={idx}
                     sx={{
                        textAlign: 'center',
                        backgroundColor,
                        borderRadius: 2,
                        padding: 2,
                     }}
                  >
                  {pokemon.details && (
                     <img
                        src={pokemon.details.sprites.front_default}
                        alt={pokemon.name}
                        style={{ width: '80px', height: '80px' }}
                     />
                  )}
                  <Typography variant="subtitle1">
                     {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                     Type: {typeDisplay.charAt(0).toUpperCase() + typeDisplay.slice(1)}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                     Abilities: {abilitiesDisplay}
                  </Typography>
                     {pokemon.details && (
                        <>
                           <Typography variant="body2" color="text.secondary">
                              HP: {pokemon.details.stats.find(stat => stat.stat.name === 'hp')?.base_stat ?? 'N/A'}
                           </Typography>
                           <Typography variant="body2" color="text.secondary">
                              Attack: {pokemon.details.stats.find(stat => stat.stat.name === 'attack')?.base_stat ?? 'N/A'}
                           </Typography>
                           <Typography variant="body2" color="text.secondary">
                              Defense: {pokemon.details.stats.find(stat => stat.stat.name === 'defense')?.base_stat ?? 'N/A'}
                           </Typography>
                           <Typography variant="body2" color="text.secondary">
                              Speed: {pokemon.details.stats.find(stat => stat.stat.name === 'speed')?.base_stat ?? 'N/A'}
                           </Typography>
                        </>
                     )}
                  </Box>
               );
            })}
         </Box>
      </Box>
   );
};

export default ComparisonSection;
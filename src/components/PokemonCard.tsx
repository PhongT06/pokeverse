import React from 'react';
import type { Pokemon } from '../types';
import { Card, CardContent, Typography, Button, Box } from '@mui/material';
import { getTypeColor } from '../utils/typeColors';

interface PokemonCardProps {
   pokemon: Pokemon;
   isSelected: boolean;
   onSelect: (pokemon: Pokemon) => void;
   isInSquad: boolean;
   onAddToSquad: (pokemon: Pokemon) => void;
   onRemoveFromSquad: (pokemon: Pokemon) => void;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ 
   pokemon, 
   isSelected, 
   onSelect,
   isInSquad,
   onAddToSquad,
   onRemoveFromSquad,
}) => {
   const primaryType = pokemon.details?.types[0]?.type.name || 'normal';
   const secondaryType = pokemon.details?.types[1]?.type.name;
   const typeDisplay = secondaryType ? `${primaryType}/${secondaryType}` : primaryType;
   const abilitiesDisplay = pokemon.details?.abilities
      .map(ability => ability.ability.name.charAt(0).toUpperCase() + ability.ability.name.slice(1))
      .join(', ') || 'N/A';
   const backgroundColor = getTypeColor(primaryType);

   return (
      <Card
         sx={{
            textAlign: 'center',
            backgroundColor,
            transition: 'background-color 0.3s',
            '&:hover': {
               backgroundColor: isSelected ? backgroundColor : '#F5F5F5',
            },
         }}
      >
         <CardContent>
            {pokemon.details && (
               <img
                  src={pokemon.details.sprites.front_default}
                  alt={pokemon.name}
                  style={{ width: '100px', height: '100px' }}
               />
            )}
            <Typography variant="h6">
               {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
            </Typography>
            <Typography variant="body2" sx={{ fontWeight: 'bold', color: 'text.primary' }}>
               Type: {typeDisplay.charAt(0).toUpperCase() + typeDisplay.slice(1)}
            </Typography>
            <Typography variant="body2" sx={{ fontStyle: 'italic', color: 'text.secondary' }}>
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
            <Box sx={{ display: 'flex', gap: 1, justifyContent: 'center', marginTop: 1 }}>
               <Button
                  variant={isSelected ? 'outlined' : 'contained'}
                  onClick={() => onSelect(pokemon)}
                  size="small"
                  sx={{ minWidth: '120px' }}
               >
                  {isSelected ? 'Deselect' : 'Select'}
               </Button>
               <Button
                  variant={isInSquad ? 'outlined' : 'contained'}
                  color={isInSquad ? 'error' : 'primary'}
                  onClick={() => (isInSquad ? onRemoveFromSquad(pokemon) : onAddToSquad(pokemon))}
                  size="small"
                  sx={{ minWidth: '120px' }}
               >
                  {isInSquad ? 'Remove from Squad' : 'Add to Squad'}
               </Button>
            </Box>
         </CardContent>
      </Card>
   );
};

export default PokemonCard;
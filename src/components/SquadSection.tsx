import type { Pokemon } from '../types';
import { Box, Typography, Button } from '@mui/material';
import { getTypeColor } from '../utils/typeColors';

interface SquadSectionProps {
   squad: Pokemon[];
   onRemoveFromSquad: (pokemon: Pokemon) => void;
}

const SquadSection: React.FC<SquadSectionProps> = ({ squad, onRemoveFromSquad }) => {
   if (squad.length === 0) return null;

   return (
      <Box sx={{ marginBottom: 2, textAlign: 'center' }}>
         <Typography variant="h6" gutterBottom>
            Your Squad ({squad.length}/6)
         </Typography>
         <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
         {squad.map((pokemon, idx) => {
            const primaryType = pokemon.details?.types[0]?.type.name || 'normal';
            const backgroundColor = getTypeColor(primaryType);

               return (
                  <Box
                     key={idx}
                     sx={{
                        textAlign: 'center',
                        backgroundColor,
                        borderRadius: 2,
                        padding: 1,
                     }}
                  >
                     {pokemon.details && (
                        <img
                           src={pokemon.details.sprites.front_default}
                           alt={pokemon.name}
                           style={{ width: '60px', height: '60px' }}
                        />
                     )}
                     <Typography variant="body2">
                        {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
                     </Typography>
                     <Button
                        variant="outlined"
                        color="error"
                        size="small"
                        onClick={() => onRemoveFromSquad(pokemon)}
                        sx={{ marginTop: 0.5 }}
                     >
                        Remove
                     </Button>
                  </Box>
               );
            })}
         </Box>
         <Box sx={{ marginTop: 2 }}>
            <Button
               variant="contained"
               color="success"
               disabled={squad.length < 2}
            >
               Battle
            </Button>
         </Box>
      </Box>
   );
};

export default SquadSection;

export const getTypeColor = (type: string): string => {
   switch (type) {
      case 'fire':
         return '#FFCDD2'; // Light red
      case 'water':
         return '#BBDEFB'; // Light blue
      case 'grass':
         return '#C8E6C9'; // Light green
      case 'electric':
         return '#FFF9C4'; // Light yellow
      case 'normal':
         return '#DCEDC8'; // Light beige
      case 'ice':
         return '#B3E5FC'; // Light cyan
      case 'fighting':
         return '#FFCCBC'; // Light orange
      case 'poison':
         return '#E1BEE7'; // Light purple
      case 'ground':
         return '#D7CCC8'; // Light brown
      case 'flying':
         return '#B0BEC5'; // Light gray-blue
      case 'psychic':
         return '#F8BBD0'; // Light pink
      case 'bug':
         return '#DCEDC8'; // Light lime
      case 'rock':
         return '#D6D8D9'; // Light gray
      case 'ghost':
         return '#D1C4E9'; // Light lavender
      case 'dragon':
         return '#B2EBF2'; // Light teal
      case 'dark':
         return '#CFD8DC'; // Light dark gray
      case 'steel':
         return '#ECEFF1'; // Light silver
      case 'fairy':
         return '#FCE4EC'; // Light pink
      default:
         return '#E0E0E0'; // Default light gray
   }
};
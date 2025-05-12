export interface Stat {
   base_stat: number;
   stat: {
      name: string;
   };
}

export interface Type {
   type: {
      name: string;
   };
}

export interface Ability {
   ability: {
      name: string;
   }
}

export interface PokemonDetail {
   id: number;
   name: string;
   sprites: {
      front_default: string;
   };
   stats: Stat[];
   types: Type[];
   abilities: Ability[];
}

export interface Pokemon {
   name: string;
   url: string;
   details?: PokemonDetail;
}

export interface PokemonResponse {
   results: Pokemon[];
}
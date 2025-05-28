export interface Stat {
   base_stat: number;
   stat: {
      name: string;
      url: string;
   };
   effort: number;
}

export interface Type {
   slot: number;
   type: {
      name: string;
      url: string;
   };
}

export interface Ability {
   ability: {
      name: string;
      url: string;
   };
   is_hidden: boolean;
   slot: number;
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
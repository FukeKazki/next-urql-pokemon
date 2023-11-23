import { gql } from "urql";

export const GetPokemonList = gql`
  query GetPokemonList($first: Int!) {
    pokemons(first: $first) {
      name
      number
      image
      id
      types
      classification
    }
  }
`;

export const GetPokemon = gql`
  query GetPokemon($id: String!) {
    pokemon(id: $id) {
      id
      name
      number
      image
      classification
      types
      resistant
      weaknesses
      fleeRate
      maxCP
      maxHP
      evolutions {
        id
        name
        image
      }
    }
  }
`;

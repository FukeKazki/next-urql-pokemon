import { GetPokemon } from "@/graphql/query";
import { PokemonModal } from "./modal";
import { getClient } from "@/lib/urql";

type Props = {
  params: {
    pokemonId: string;
  };
};

export default async function Detail({ params }: Props) {
  const result = await getClient().query(GetPokemon, {
    id: decodeURIComponent(params.pokemonId),
  });

  return <PokemonModal pokemon={result.data?.pokemon} />;
}

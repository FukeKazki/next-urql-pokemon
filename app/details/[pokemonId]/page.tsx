import { PokemonModal } from "@/app/@modal/(.)details/[pokemonId]/modal";
import { GetPokemon } from "@/graphql/query";
import { getClient } from "@/lib/urql";

type Props = {
  params: {
    pokemonId: string;
  };
};

export default async function Page({ params }: Props) {
  const result = await getClient().query(GetPokemon, {
    id: decodeURIComponent(params.pokemonId),
  });

  return <PokemonModal pokemon={result.data?.pokemon} />;
}

import { GetPokemonList } from "@/graphql/query";
import { getClient } from "@/lib/urql";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const result = await getClient().query(GetPokemonList, { first: 151 });

  return (
    <main>
      <section className="container mx-auto py-10">
        <ul className="grid grid-columns-auto-fill-48 gap-4">
          {result.data?.pokemons.map((pokemon: any) => (
            <li
              key={pokemon.id}
              className="grid grid-rows-subgrid row-span-4 gap-2 p-4 shadow-md rounded-md hover:shadow-lg relative"
            >
              <p className="text-blue-300">{pokemon.number}</p>
              <Image
                src={pokemon.image}
                alt={pokemon.name}
                width={192}
                height={192}
              />
              <Link
                href={`/details/${pokemon.id}`}
                className="after:absolute after:inset-0 after:w-full after:h-full"
              >
                {pokemon.name}
              </Link>
              <div className="flex gap-2">
                {pokemon.types.map((type: string) => (
                  <span
                    key={type}
                    className="bg-blue-800 px-2 py-1 rounded text-white text-sm"
                  >
                    {type}
                  </span>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

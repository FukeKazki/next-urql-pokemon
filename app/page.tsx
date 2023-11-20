import { registerUrql } from "@urql/next/rsc";
import Image from "next/image";
import { cacheExchange, createClient, fetchExchange } from "urql";

// サーバーコンポーネントでの実行

const makeClient = () => {
  return createClient({
    url: "https://graphql-pokemon2.vercel.app/",
    exchanges: [cacheExchange, fetchExchange],
  });
};

const { getClient } = registerUrql(makeClient);

export default async function Home() {
  const result = await getClient().query(
    `{
      pokemons(first: 100) {
        name
        number
        image
        id
        types
        classification
      }
    }`,
    {},
  );

  return (
    <main>
      <section className="container mx-auto py-10">
        <ul className="grid grid-columns-auto-fit-48 gap-4">
          {result.data?.pokemons.map((pokemon: any) => (
            <li
              key={pokemon.id}
              className="grid grid-rows-subgrid row-span-4 gap-2 p-4 shadow-md rounded-md"
            >
              <p>{pokemon.number}</p>
              <Image
                src={pokemon.image}
                alt={pokemon.name}
                width={200}
                height={200}
              />
              <p>{pokemon.name}</p>
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

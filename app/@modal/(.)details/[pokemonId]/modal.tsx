"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";

type Pokemon = {
  id: string;
  name: string;
  number: string;
  image: string;
  classification: string;
  types: string[];
  resistant: string[];
  weaknesses: string[];
  fleeRate: number;
  maxCP: number;
  maxHP: number;
  evolutions: {
    id: string;
    name: string;
    image: string;
  }[];
};

type Props = {
  pokemon: Pick<Pokemon, "id" | "name" | "number" | "image" | "types">;
};

export const PokemonModal = ({ pokemon }: Props) => {
  const router = useRouter();

  const onClose = () => {
    router.back();
  };

  const onOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div role="dialog" className="fixed inset-0" aria-modal>
      {/* Overlay */}
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75" />
      <div
        className="fixed inset-0 grid place-items-center"
        onClick={onOutsideClick}
      >
        {/* 中身 */}
        <div className="bg-white rounded-lg z-10 h-[calc(100dvh-32px)] w-[calc(100vw-32px)] md:h-[calc(100dvh-128px)] md:w-[calc(100vw-128px)]">
          <div className="p-8 grid grid-cols-1 md:grid-cols-2 h-full">
            <div className="relative">
              <Image
                src={pokemon.image}
                alt={pokemon.name}
                fill
                className="object-contain"
              />
            </div>
            <div className="">
              <p className="text-gray-500">{pokemon.number}</p>
              <h2 className="text-2xl font-bold mt-2">{pokemon.name}</h2>
              <div className="flex gap-2 mt-2">
                {pokemon.types.map((type: string) => (
                  <span
                    key={type}
                    className="bg-blue-800 px-2 py-1 rounded text-white text-sm"
                  >
                    {type}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

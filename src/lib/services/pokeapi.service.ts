import { useQuery } from "react-query";
import { axios } from "./axios";

const useGetAllPokemons = () => {
  const result = useQuery<{
    count: number;
    results: {
      name: string;
      url: string;
    }[];
  }>({
    queryKey: "getAllPokemons",
    queryFn: async () => {
      const { data } = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"
      );
      return data;
    },
  });

  return result;
};

const useGetAbility = (name: string) => {
  const abilityName = name ? name : "overgrow";

  const result = useQuery({
    queryKey: ["getAbility", abilityName],
    queryFn: async () => {
      const { data } = await axios.get(
        `https://pokeapi.co/api/v2/ability/${abilityName}`
      );
      return data;
    },
  });

  return result;
};

const useGetPokemon = (name: string) => {
  const pokemonName = name ? name : "bulbasaur";

  const result = useQuery({
    queryKey: ["getPokemon", pokemonName],
    queryFn: async () => {
      const { data } = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
      );
      return data;
    },
  });

  return result;
};

export const pokeapiService = {
  useGetAllPokemons,
  useGetPokemon,
  useGetAbility,
};

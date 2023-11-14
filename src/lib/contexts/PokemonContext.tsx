import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
import { pokeapiService } from "../services/pokeapi.service";
import { PokemonType } from "../types/Pokemon.type";

export type PokemonContextType = {
  currentPokemon: string;
  setCurrentPokemon: Dispatch<SetStateAction<string>>;
  pokemon: PokemonType | undefined;
  isLoadingPokemon: boolean;
};

export const PokemonContext = createContext<PokemonContextType>({
  currentPokemon: "",
  setCurrentPokemon: () => null,
  pokemon: undefined,
  isLoadingPokemon: false,
});

export const PokemonContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [currentPokemon, setCurrentPokemon] = useState("");
  const [currentAbilities, setCurrentAbilities] = useState<string[]>([]);

  const { data: pokemon, isLoading: isLoadingPokemon } =
    pokeapiService.useGetPokemon(currentPokemon);

  return (
    <PokemonContext.Provider
      value={{
        currentPokemon,
        setCurrentPokemon,
        isLoadingPokemon,
        pokemon,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

export const usePokemonContext = () => {
  const context = useContext(PokemonContext);

  if (context === undefined) {
    throw new Error(
      "usePokemonContext must be used within a PokemonContextProvider"
    );
  }

  return context;
};

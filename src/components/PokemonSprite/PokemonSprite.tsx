import { Skeleton } from "@mui/material";
import { usePokemonContext } from "../../lib/contexts/PokemonContext";
import "./PokemonSprite.css";

export default function PokemonSprite() {
  const { pokemon, isLoadingPokemon } = usePokemonContext();

  return isLoadingPokemon ? <Skeleton /> : (
      <div className="pokemon-sprite">
        <img
          src={pokemon?.sprites?.front_default}
          alt={pokemon?.name}
        ></img>
      </div>
  );
}

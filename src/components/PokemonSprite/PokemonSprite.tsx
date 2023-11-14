import { Skeleton } from "@mui/material";
import { usePokemonContext } from "../../lib/contexts/PokemonContext";
import { PokemonSpriteStyled } from "./PokemonSprite.styles";

export default function PokemonSprite() {
  const { pokemon, isLoadingPokemon } = usePokemonContext();

  return isLoadingPokemon ? (
    <Skeleton />
  ) : (
    <PokemonSpriteStyled>
      <img
        className="image"
        src={pokemon?.sprites?.front_default}
        alt={pokemon?.name}
      ></img>
    </PokemonSpriteStyled>
  );
}

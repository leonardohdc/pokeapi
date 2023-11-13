import { Typography } from "@mui/material";
import { Container } from "./PokemonStatus.styles";

export type PokemonStatusProps = {
  pokemon: {
    name: string;
  };
};

const PokemonStatus = ({ pokemon }: PokemonStatusProps) => {
  return (
    <Container>
      <Typography className="pokemon-status-title">{pokemon.name}</Typography>
    </Container>
  );
};

export default PokemonStatus;

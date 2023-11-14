import { TypeBox } from "./PokemonTypeStyle";
import { colorDictionary } from "../../lib/utils/colorDictionary";
import { usePokemonContext } from "../../lib/contexts/PokemonContext";
import { styled } from "styled-components";

const StyledContainer = styled.div`
  width: 300px;
  display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: center;
	align-items: stretch;
	align-content: stretch;
`;

export default function PokemonType() {
  const { pokemon, isLoadingPokemon } = usePokemonContext();
  return (
    <StyledContainer>
      {pokemon?.types.map((type, index) => (
        <TypeBox
          key={type.type.name}
          text={type.type.name.toUpperCase()}
          backgroundColor={colorDictionary[type.type.name]}
        ></TypeBox>
      ))}
    </StyledContainer>
  );
}

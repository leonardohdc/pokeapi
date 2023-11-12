import React from "react";
import styled from "styled-components";
import { PokemonAbility } from "../../../helpers/class/PokemonAbility";
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

interface PokemonAbilities {
  pokemonAbilities: PokemonAbility[];
}

const StyledComponent = styled.div`
  background-color: #FAF9F6;
  border-radius: 5px;
  height: 168px;
  position: relative;
  width: 225px;
  border: 1px solid black;
  border-radius: 5px;

  & .text-wrapper {
    color: #000000;
    font-family: "Inter-Regular", Helvetica;
    font-size: 12px;
    font-weight: 400;
    left: 77px;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    top: 18px;
  }

  & .INFO {
    text-align: left;
    left: 33px;
    top: 47px;
    position: absolute;
  }
`;

const StyledParagraph = styled.p`
  color: #000000;
  font-family: "Inter-Regular", Helvetica;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: normal;
`;

export const PokemonAbilitiesBox: React.FC<PokemonAbilities> = (props) => {
  return (
    <StyledComponent>
      <div className="text-wrapper">ABILITIES</div>
      <div className="INFO">
        {props.pokemonAbilities.map((pokemonAbility, index) => (
          <StyledParagraph key={index}>
            {pokemonAbility.abilityName.toUpperCase()}
            <HelpOutlineIcon fontSize="small"></HelpOutlineIcon>
          </StyledParagraph>
        ))}
      </div>
    </StyledComponent>
  );
};
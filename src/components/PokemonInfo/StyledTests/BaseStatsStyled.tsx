import React from "react";
import styled from "styled-components";
import { BaseStats } from '../../../helpers/class/BaseStats';

interface PokemonStats {
  baseStats: BaseStats;
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

  & .STATS {
    color: #000000;
    font-family: "Inter-Regular", Helvetica;
    font-size: 12px;
    font-weight: 400;
    left: 33px;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    text-align: left;
    top: 47px;
  }
`;

export const BaseStatsBox: React.FC<PokemonStats> = (props) => {
  return (
    <StyledComponent>
      <div className="text-wrapper">BASE STATS</div>
      <p className="STATS">
        HP: {props.baseStats.hp}
        <br />
        ATTACK: {props.baseStats.attack}
        <br />
        SPECIAL ATTACK: {props.baseStats.specialAttack}
        <br />
        DEFENSE: {props.baseStats.defense}
        <br />
        SPECIAL DEFENSE: {props.baseStats.specialDefense}
        <br />
        SPEED: {props.baseStats.speed}
      </p>
    </StyledComponent>
  );
};
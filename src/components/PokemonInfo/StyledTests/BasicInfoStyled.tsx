import React from "react";
import styled from "styled-components";
import { BasicInfo } from "../../../helpers/class/BasicInfo";

interface PokemonStats {
  basicInfo: BasicInfo;
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

export const BasicInfoBox: React.FC<PokemonStats> = (props) => {
  return (
    <StyledComponent>
      <div className="text-wrapper">BASIC INFO</div>
      <p className="INFO">
        WEIGHT: {props.basicInfo.weight}
        <br />
        HEIGHT: {props.basicInfo.height}
      </p>
    </StyledComponent>
  );
};
import React from "react";
import styled from "styled-components";

const StatBarContainer = styled.div`
  background-color: #F5F5F5;
  border-radius: 5px;
  height: 2rem;
  position: relative;
  width: 100%;
  display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: flex-start;
	align-items: stretch;
	align-content: stretch;

  & .rectangle {
    background-color: #30A7D7;
    border-radius: 2px;
    height: 1.5rem;
    width: 1rem;
    margin-top: 0.25rem;
    left: 0.5vh;
    margin-left: 0.25vh;
    position: relative;
  }
`;

export default StatBarContainer;
import styled from "styled-components";

export const PokemonSpriteStyled = styled.div`
  .pokemon-sprite {
    width: 280px;
  }

  & .image {
    width: 100px;
    position: relative;
    border: 1px solid #696969;
    border-radius: 50%;
    margin: 20px 0px 10px;
  }

  & .pokemon-sprite::first-letter {
    text-transform: uppercase;
  }
`;

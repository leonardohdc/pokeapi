import styled from "styled-components";

interface Type {
  text: string;
  backgroundColor: string;
}

export const TypeBox: React.FC<Type> = (props) => {

  const StyledComponent = styled.div`
  height: 50px;
  position: relative;
  width: 309px;
  margin-bottom: 40px;

  & .overlap-group {
    background-color: ${Type => props.backgroundColor};
    border-radius: 5px;
    height: 50px;
    left: 0;
    position: absolute;
    top: 0;
    width: 140px;
  }

  & .text-wrapper {
    color: #000000;
    font-family: "Inter-Regular", Helvetica;
    font-size: 12px;
    font-weight: 400;
    left: 50px;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    font-weight: 500;
    color: #212121;
    top: 17px;
  }`;

  return (
      <StyledComponent>
          <div className="overlap-group">
              <div className="text-wrapper">{props.text}</div>
          </div>
      </StyledComponent>
  );
};
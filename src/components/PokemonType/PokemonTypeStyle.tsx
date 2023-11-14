import styled from "styled-components";

interface Type {
  text: string;
  backgroundColor: string;
}

const StyledComponent = styled.div<{ $bgColor?: string }>`
  height: 50px;
  position: relative;
  width: 300px;
  margin-bottom: 40px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  align-content: stretch;

  & .overlap-group {
    background-color: ${(props) => props.$bgColor};
    border-radius: 5px;
    height: 50px;
    width: 140px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    align-content: stretch;
  }

  & .text-wrapper {
    color: #000000;
    font-family: "Inter-Regular", Helvetica;
    font-size: 12px;
    font-weight: 400;
    line-height: normal;
    font-weight: 500;
    color: #212121;
  }
`;

export const TypeBox: React.FC<Type> = (props) => {
  return (
    <StyledComponent $bgColor={props.backgroundColor}>
      <div className="overlap-group">
        <div className="text-wrapper">{props.text}</div>
      </div>
    </StyledComponent>
  );
};

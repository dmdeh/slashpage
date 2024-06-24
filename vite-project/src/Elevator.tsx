import styled from "styled-components";

export const Elevator = () => {
  return (
    <StyledContainer>
      <StyledBox>1층</StyledBox>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  border: 1px solid #000;
  width: 50px;
  height: 450px;
  margin: 10px;
`;

const StyledBox = styled.div`
  height: 30px;
  border: 1px solid black;
  text-align: center;
  align-content: center;
`;

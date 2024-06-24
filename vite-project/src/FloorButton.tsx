import styled from "styled-components";

const FloorButtons = () => {
  return (
    <StyledContainer>
      <div>호출</div>
      <StyledButtons>
        {[...Array(15)].map((_, index) => (
          <Button key={index}>{index + 1}</Button>
        ))}
      </StyledButtons>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  div {
    align-content: center;
  }
`;

const StyledButtons = styled.div`
  border: 1px solid lightgray;
`;

const Button = styled.button`
  padding: 10px 15px;
  background-color: unset;
  cursor: pointer;
  border: none;
  border-right: 1px solid lightgray;
  &:disabled {
    background-color: grey;
    color: unset;
    cursor: not-allowed;
  }
`;

export default FloorButtons;

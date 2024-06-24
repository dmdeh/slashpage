import styled from "styled-components";

interface FloorButtonsProps {
  handleButtonClick: (floor: number) => void;
  allElevatorsInUse: boolean;
}

const FloorButtons = ({ handleButtonClick, allElevatorsInUse }: FloorButtonsProps) => {
  return (
    <StyledContainer>
      <div>호출</div>
      <StyledButtons>
        {[...Array(15)].map((_, index) => (
          <Button
            key={index}
            onClick={() => handleButtonClick(index + 1)}
            disabled={allElevatorsInUse}
          >
            {index + 1}
          </Button>
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
    background-color: lightgrey;
    color: red;
    cursor: not-allowed;
  }
`;

export default FloorButtons;

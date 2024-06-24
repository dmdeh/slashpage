import { useState } from "react";
import styled from "styled-components";
interface FloorButtonsProps {
  handleButtonClick: (floor: number) => void;
  allElevatorsInUse: boolean;
}

const FloorButtons = ({
  handleButtonClick,
  allElevatorsInUse,
}: FloorButtonsProps) => {
  const [activeButton, setActiveButton] = useState<number | null>(null);

  const handleClick = (floor: number) => {
    if (allElevatorsInUse) return;
    setActiveButton(floor);
    handleButtonClick(floor);
  };

  return (
    <StyledContainer>
      <div>호출</div>
      <StyledButtons>
        {[...Array(15)].map((_, index) => (
          <Button
            key={index}
            onClick={() => handleClick(index + 1)}
            disabled={allElevatorsInUse}
            $active={activeButton === index + 1}
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

const Button = styled.button<{ $active: boolean }>`
  padding: 10px 15px;
  background-color: unset;
  cursor: pointer;
  border: none;
  border-right: 1px solid lightgray;
  color: ${(props) => (props.$active ? "red" : "black")};
  &:disabled {
    background-color: lightgrey;
    cursor: not-allowed;
  }
`;

export default FloorButtons;

import styled from "styled-components";

interface ElevatorProps {
  currentFloor: number;
}

export const Elevator = ({ currentFloor }: ElevatorProps) => {
  return (
    <StyledContainer>
      <StyledElevator $currentFloor={currentFloor}>
        {currentFloor}층
      </StyledElevator>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  border: 1px solid #000;
  width: 50px;
  height: 450px;
  margin: 10px;
  position: relative;
`;

const StyledElevator = styled.div<{ $currentFloor: number }>`
  height: 30px;
  width: 100%;
  border: 1px solid black;
  text-align: center;
  align-content: center;
  position: absolute;
  bottom: ${(props) => (props.$currentFloor - 1) * 30}px;
  transition: bottom 1s ease-in-out;
`;

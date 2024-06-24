import styled from "styled-components";

const ELEVATOR_HEIGHT = 30;

interface ElevatorProps {
  currentFloor: number;
  targetFloor: number | null;
}

export const Elevator = ({ currentFloor, targetFloor }: ElevatorProps) => {
  const moving = targetFloor !== null;
  return (
    <StyledContainer>
      <StyledElevator $moving={moving} $currentFloor={currentFloor}>
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

const StyledElevator = styled.div<{ $moving: boolean; $currentFloor: number }>`
  height: ${ELEVATOR_HEIGHT}px;
  width: 100%;
  text-align: center;
  align-content: center;
  position: absolute;
  border: ${(props) => (props.$moving ? "1px solid red" : "1px solid black;")};
  color: ${(props) => (props.$moving ? "red" : "black")};
  bottom: ${(props) => (props.$currentFloor - 1) * ELEVATOR_HEIGHT}px;
  transition: bottom 1s ease-in-out;
`;

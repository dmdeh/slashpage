import styled from "styled-components";
import { useState } from "react";
import { Elevator } from "./Elevator";
import FloorButtons from "./FloorButtons";

interface ElevatorState {
  currentFloor: number;
  targetFloor: number | null;
}

function App() {
  const [elevators, setElevators] = useState<ElevatorState[]>([
    { currentFloor: 1, targetFloor: null },
    { currentFloor: 1, targetFloor: null },
    { currentFloor: 1, targetFloor: null },
  ]);

  const moveElevator = (index: number, floor: number) => {
    const interval = setInterval(() => {
      setElevators((prevElevators) => {
        const { currentFloor } = prevElevators[index];
        if (currentFloor === floor) {
          clearInterval(interval);
          return prevElevators.map((e, i) =>
            i === index ? { ...e, targetFloor: null } : e
          );
        }

        const direction = currentFloor < floor ? 1 : -1;

        return prevElevators.map((e, i) =>
          i === index ? { ...e, currentFloor: currentFloor + direction } : e
        );
      });
    }, 1000);
  };

  const handleButtonClick = (floor: number) => {
    const availableElevator = elevators.findIndex(
      (e) => e.targetFloor === null
    );

    if (availableElevator !== -1) {
      const newElevators = elevators.map((e, index) =>
        index === availableElevator ? { ...e, targetFloor: floor } : e
      );
      setElevators(newElevators);
      moveElevator(availableElevator, floor);
    }
  };

  const allElevatorsInUse = elevators.every((e) => e.targetFloor !== null);

  return (
    <Wrap>
      <FloorButtons
        handleButtonClick={handleButtonClick}
        allElevatorsInUse={allElevatorsInUse}
      />
      <StyledElevators>
        {elevators.map(({ currentFloor, targetFloor }, index) => (
          <Elevator
            key={index}
            currentFloor={currentFloor}
            targetFloor={targetFloor}
          />
        ))}
      </StyledElevators>
    </Wrap>
  );
}

const Wrap = styled.div`
  min-width: 650px;
  padding: 10vh;
`;

const StyledElevators = styled.div`
  display: flex;
  justify-content: center;
`;

export default App;

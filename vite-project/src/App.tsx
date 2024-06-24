import styled from "styled-components";
import { useState } from "react";
import { Elevator } from "./Elevator";
import FloorButtons from "./FloorButton";

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

  const handleButtonClick = (floor: number) => {
    const availableElevator = elevators.findIndex(
      (e) => e.targetFloor === null
    );

    if (availableElevator !== -1) {
      const newElevators = [...elevators];
      newElevators[availableElevator] = {
        ...newElevators[availableElevator],
        targetFloor: floor,
      };
      setElevators(newElevators);
      console.log("🚀 ~ handleButtonClick ~ newElevators:", newElevators);
    }
  };

  const allElevatorsInUse = elevators.every((e) => e.targetFloor !== null);

  return (
    <>
      <FloorButtons
        handleButtonClick={handleButtonClick}
        allElevatorsInUse={allElevatorsInUse}
      />
      <Wrap>
        {elevators.map((elevator, index) => (
          <Elevator key={index} currentFloor={elevator.currentFloor} />
        ))}
      </Wrap>
    </>
  );
}

const Wrap = styled.div`
  display: flex;
  justify-content: center;
`;

export default App;

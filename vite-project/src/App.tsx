import styled from "styled-components";
import { Elevator } from "./Elevator";
import FloorButtons from "./FloorButton";

function App() {
  return (
    <>
      <FloorButtons />
      <Wrap>
        <Elevator />
        <Elevator />
        <Elevator />
      </Wrap>
    </>
  );
}

const Wrap = styled.div`
  display: flex;
  justify-content: center;
`;

export default App;

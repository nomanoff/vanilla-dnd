import React, { useState } from "react";
import styled from "styled-components";
import { ParentBox, ChildBox } from "./Vanilla";

function App() {
  const [hasChild1, setHasChild1] = useState({
    parent1: true,
    parent2: false,
    parent3: false,
    parent4: false,
    parent5: false,
  });
  const [hasChild2, setHasChild2] = useState({
    parent1: false,
    parent2: true,
    parent3: false,
    parent4: false,
    parent5: false,
  });

  return (
    <StyledCanvas>
      <StyledWrapper>
        <ParentBox id="1" control1={setHasChild2} control={setHasChild1}>
          {hasChild1.parent1 && (
            <ChildBox key="1" id="a">
              A
            </ChildBox>
          )}
          {hasChild2.parent1 && (
            <ChildBox key="2" id="b">
              B
            </ChildBox>
          )}
        </ParentBox>

        <ParentBox id="2" control1={setHasChild2} control={setHasChild1}>
          {hasChild1.parent2 && (
            <ChildBox key="1" id="a">
              A
            </ChildBox>
          )}
          {hasChild2.parent2 && (
            <ChildBox key="2" id="b">
              B
            </ChildBox>
          )}
        </ParentBox>

        <ParentBox id="3" control1={setHasChild2} control={setHasChild1}>
          {hasChild1.parent3 && (
            <ChildBox key="1" id="a">
              A
            </ChildBox>
          )}
          {hasChild2.parent3 && (
            <ChildBox key="2" id="b">
              B
            </ChildBox>
          )}
        </ParentBox>
        <ParentBox id="4" control1={setHasChild2} control={setHasChild1}>
          {hasChild1.parent4 && (
            <ChildBox key="1" id="a">
              A
            </ChildBox>
          )}
          {hasChild2.parent4 && (
            <ChildBox key="2" id="b">
              B
            </ChildBox>
          )}
        </ParentBox>
        <ParentBox id="5" control1={setHasChild2} control={setHasChild1}>
          {hasChild1.parent5 && (
            <ChildBox key="1" id="a">
              A
            </ChildBox>
          )}
          {hasChild2.parent5 && (
            <ChildBox key="2" id="b">
              B
            </ChildBox>
          )}
        </ParentBox>
      </StyledWrapper>
    </StyledCanvas>
  );
}

export default App;

const StyledCanvas = styled.div`
  background: #e76f51;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledWrapper = styled.div`
  display: grid;
  width: 1000px;
  height: 1000px;
  background-color: #2a9d8f;
  border-radius: 5px;
  margin: 0 auto;
  padding: 10px;
  justify-content: center;
  align-content: center;
  justify-items: center;
  align-items: center;
  border: 6px solid #d3c6a6;
  grid-template-columns: 200px 200px 200px 200px 200px;
  grid-template-rows: 200px 200px 200px 200px 200px;
`;

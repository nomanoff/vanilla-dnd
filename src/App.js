import React, { useState } from "react";
import styled from "styled-components";
import { ParentBox, ChildBox } from "./Vanilla";

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

const StyledEmpty = styled.div`
  height: 150px;
  width: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
`;

const StyledFill = styled.div`
  background-color: #264653;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  color: #fff;
  border-radius: 10px;
  border: 2px solid #e0e0e0;
  margin: 5px;
  height: 130px;
  width: 130px;
  cursor: pointer;
  user-select: none;
`;

function App() {
  const [hasChild, setHasChild] = useState();

  return (
    <StyledCanvas>
      <StyledWrapper>
        <ParentBox>
          {/* Take from this and ... */}
          <ChildBox key="1" id="a">
            A
          </ChildBox>
        </ParentBox>

        <ParentBox>{/* Insert Here for e.g. */}</ParentBox>

        <ParentBox>{/* Or Here ... */}</ParentBox>
      </StyledWrapper>
    </StyledCanvas>
  );
}

export default App;

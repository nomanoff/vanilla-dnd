import React, { useState } from "react";
import styled from "styled-components";
import PanToolIcon from "@material-ui/icons/PanTool";
import { ParentBox, ChildBox } from "./Vanilla";

const StyledCanvas = styled.div`
  background: #e5e5e5;
  width: 100%;
  height: 99vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledWrapper = styled.div`
  display: grid;
  width: 850px;
  height: 290px;
  background-color: #162043;
  border-radius: 5px;
  border: 3px solid #fff;
  margin: 0 auto;
  justify-content: center;
  align-content: center;
  align-items: center;
  justify-items: center;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  grid-template-columns: repeat(5, 160px);
  grid-template-rows: repeat(2, 120px); ;
`;

const StyledPersonIcon = styled(PanToolIcon)`
  && {
    color: white;
    font-size: 1.7rem;
    margin-bottom: 2px;
  }
`;

function App() {
  const [currentDrag, setCurrDrag] = useState("");

  function handleCurrent(current) {
    setCurrDrag(current);
  }

  const [hasChild1, setHasChild1] = useState({
    parent1: true,
    parent2: false,
    parent3: false,
    parent4: false,
    parent5: false,
    parent6: false,
    parent7: false,
    parent8: false,
    parent9: false,
    parent10: false,
  });
  const [hasChild2, setHasChild2] = useState({
    parent1: false,
    parent2: true,
    parent3: false,
    parent4: false,
    parent5: false,
    parent6: false,
    parent7: false,
    parent8: false,
    parent9: false,
    parent10: false,
  });

  return (
    <StyledCanvas>
      <StyledWrapper>
        <ParentBox
          id="1"
          current={currentDrag}
          control1={setHasChild2}
          control={setHasChild1}
        >
          {hasChild1.parent1 && (
            <ChildBox key="1" currentChild={handleCurrent} id="a">
              <StyledPersonIcon />
              drag me
            </ChildBox>
          )}
          {hasChild2.parent1 && (
            <ChildBox key="2" currentChild={handleCurrent} id="b">
              <StyledPersonIcon />
              me too
            </ChildBox>
          )}
        </ParentBox>

        <ParentBox
          id="2"
          current={currentDrag}
          control1={setHasChild2}
          control={setHasChild1}
        >
          {hasChild1.parent2 && (
            <ChildBox key="1" currentChild={handleCurrent} id="a">
              <StyledPersonIcon />
              drag me
            </ChildBox>
          )}
          {hasChild2.parent2 && (
            <ChildBox key="2" currentChild={handleCurrent} id="b">
              <StyledPersonIcon />
              me too
            </ChildBox>
          )}
        </ParentBox>

        <ParentBox
          id="3"
          current={currentDrag}
          control1={setHasChild2}
          control={setHasChild1}
        >
          {hasChild1.parent3 && (
            <ChildBox key="1" currentChild={handleCurrent} id="a">
              <StyledPersonIcon />
              drag me
            </ChildBox>
          )}
          {hasChild2.parent3 && (
            <ChildBox key="2" currentChild={handleCurrent} id="b">
              <StyledPersonIcon />
              me too
            </ChildBox>
          )}
        </ParentBox>
        <ParentBox
          id="4"
          current={currentDrag}
          control1={setHasChild2}
          control={setHasChild1}
        >
          {hasChild1.parent4 && (
            <ChildBox key="1" currentChild={handleCurrent} id="a">
              <StyledPersonIcon />
              drag me
            </ChildBox>
          )}
          {hasChild2.parent4 && (
            <ChildBox key="2" currentChild={handleCurrent} id="b">
              <StyledPersonIcon />
              me too
            </ChildBox>
          )}
        </ParentBox>
        <ParentBox
          id="5"
          current={currentDrag}
          control1={setHasChild2}
          control={setHasChild1}
        >
          {hasChild1.parent5 && (
            <ChildBox key="1" currentChild={handleCurrent} id="a">
              <StyledPersonIcon />
              drag me
            </ChildBox>
          )}
          {hasChild2.parent5 && (
            <ChildBox key="2" currentChild={handleCurrent} id="b">
              <StyledPersonIcon />
              me too
            </ChildBox>
          )}
        </ParentBox>
        <ParentBox
          id="6"
          current={currentDrag}
          control1={setHasChild2}
          control={setHasChild1}
        >
          {hasChild1.parent6 && (
            <ChildBox key="1" currentChild={handleCurrent} id="a">
              <StyledPersonIcon />
              drag me
            </ChildBox>
          )}
          {hasChild2.parent6 && (
            <ChildBox key="2" currentChild={handleCurrent} id="b">
              <StyledPersonIcon />
              me too
            </ChildBox>
          )}
        </ParentBox>
        <ParentBox
          id="7"
          current={currentDrag}
          control1={setHasChild2}
          control={setHasChild1}
        >
          {hasChild1.parent7 && (
            <ChildBox key="1" currentChild={handleCurrent} id="a">
              <StyledPersonIcon />
              drag me
            </ChildBox>
          )}
          {hasChild2.parent7 && (
            <ChildBox key="2" currentChild={handleCurrent} id="b">
              <StyledPersonIcon />
              me too
            </ChildBox>
          )}
        </ParentBox>
        <ParentBox
          id="8"
          current={currentDrag}
          control1={setHasChild2}
          control={setHasChild1}
        >
          {hasChild1.parent8 && (
            <ChildBox key="1" currentChild={handleCurrent} id="a">
              <StyledPersonIcon />
              drag me
            </ChildBox>
          )}
          {hasChild2.parent8 && (
            <ChildBox key="2" currentChild={handleCurrent} id="b">
              <StyledPersonIcon />
              me too
            </ChildBox>
          )}
        </ParentBox>
        <ParentBox
          id="9"
          current={currentDrag}
          control1={setHasChild2}
          control={setHasChild1}
        >
          {hasChild1.parent9 && (
            <ChildBox key="1" currentChild={handleCurrent} id="a">
              <StyledPersonIcon />
              drag me
            </ChildBox>
          )}
          {hasChild2.parent9 && (
            <ChildBox key="2" currentChild={handleCurrent} id="b">
              <StyledPersonIcon />
              me too
            </ChildBox>
          )}
        </ParentBox>
        <ParentBox
          id="10"
          current={currentDrag}
          control1={setHasChild2}
          control={setHasChild1}
        >
          {hasChild1.parent10 && (
            <ChildBox key="1" currentChild={handleCurrent} id="a">
              <StyledPersonIcon />
              drag me
            </ChildBox>
          )}
          {hasChild2.parent10 && (
            <ChildBox key="2" currentChild={handleCurrent} id="b">
              <StyledPersonIcon />
              me too
            </ChildBox>
          )}
        </ParentBox>
      </StyledWrapper>
    </StyledCanvas>
  );
}

export default App;

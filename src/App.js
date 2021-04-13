import React, { useState } from "react";
import styled from "styled-components";
import PersonIcon from "@material-ui/icons/Person";
import { ParentBox, ChildBox } from "./Vanilla";

const StyledCanvas = styled.div`
  background: #abd8ff;
  width: 100%;
  height: 99vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledWrapper = styled.div`
  display: grid;
  width: 990px;
  height: 660px;
  background-color: #162043;
  border-radius: 5px;
  margin: 0 auto;
  padding: 5px;
  justify-content: center;
  align-content: center;
  justify-items: center;
  align-items: center;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  grid-template-columns: repeat(6, 165px);
  grid-template-rows: repeat(6, 110px); ;
`;

const StyledPersonIcon = styled(PersonIcon)`
  && {
    color: white;
    font-size: 2rem;
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
    parent11: false,
    parent12: false,
    parent13: false,
    parent14: false,
    parent15: false,
    parent16: false,
    parent17: false,
    parent18: false,
    parent19: false,
    parent20: false,
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
    parent11: false,
    parent12: false,
    parent13: false,
    parent14: false,
    parent15: false,
    parent16: false,
    parent17: false,
    parent18: false,
    parent19: false,
    parent20: false,
  });

  const [status, setStatus] = useState(false);

  console.log("f", hasChild2);
  console.log("f", hasChild1);
  let hasMembers = JSON.stringify(hasChild1) === JSON.stringify(hasChild2);

  console.log(hasMembers);

  return (
    <StyledCanvas>
      <StyledWrapper>
        <ParentBox
          id="1"
          current={currentDrag}
          control1={setHasChild2}
          control={setHasChild1}
          userInOne={status}
        >
          {hasChild1.parent1 && (
            <ChildBox key="1" currentChild={handleCurrent} id="a">
              <StyledPersonIcon />
              user one
            </ChildBox>
          )}
          {hasChild2.parent1 && (
            <ChildBox key="2" currentChild={handleCurrent} id="b">
              <StyledPersonIcon />
              user two
            </ChildBox>
          )}
        </ParentBox>

        <ParentBox
          id="2"
          current={currentDrag}
          control1={setHasChild2}
          control={setHasChild1}
          userInOne={status}
        >
          {hasChild1.parent2 && (
            <ChildBox key="1" currentChild={handleCurrent} id="a">
              <StyledPersonIcon />
              user one
            </ChildBox>
          )}
          {hasChild2.parent2 && (
            <ChildBox key="2" currentChild={handleCurrent} id="b">
              <StyledPersonIcon />
              user two
            </ChildBox>
          )}
        </ParentBox>

        <ParentBox
          id="3"
          current={currentDrag}
          control1={setHasChild2}
          control={setHasChild1}
          userInOne={status}
        >
          {hasChild1.parent3 && (
            <ChildBox key="1" currentChild={handleCurrent} id="a">
              <StyledPersonIcon />
              user one
            </ChildBox>
          )}
          {hasChild2.parent3 && (
            <ChildBox key="2" currentChild={handleCurrent} id="b">
              <StyledPersonIcon />
              user two
            </ChildBox>
          )}
        </ParentBox>
        <ParentBox
          id="4"
          current={currentDrag}
          control1={setHasChild2}
          control={setHasChild1}
          userInOne={status}
        >
          {hasChild1.parent4 && (
            <ChildBox key="1" currentChild={handleCurrent} id="a">
              <StyledPersonIcon />
              user one
            </ChildBox>
          )}
          {hasChild2.parent4 && (
            <ChildBox key="2" currentChild={handleCurrent} id="b">
              <StyledPersonIcon />
              user two
            </ChildBox>
          )}
        </ParentBox>
        <ParentBox
          id="5"
          current={currentDrag}
          control1={setHasChild2}
          control={setHasChild1}
          userInOne={status}
        >
          {hasChild1.parent5 && (
            <ChildBox key="1" currentChild={handleCurrent} id="a">
              <StyledPersonIcon />
              user one
            </ChildBox>
          )}
          {hasChild2.parent5 && (
            <ChildBox key="2" currentChild={handleCurrent} id="b">
              <StyledPersonIcon />
              user two
            </ChildBox>
          )}
        </ParentBox>
        <ParentBox
          id="6"
          current={currentDrag}
          control1={setHasChild2}
          control={setHasChild1}
          userInOne={status}
        >
          {hasChild1.parent6 && (
            <ChildBox key="1" currentChild={handleCurrent} id="a">
              <StyledPersonIcon />
              user one
            </ChildBox>
          )}
          {hasChild2.parent6 && (
            <ChildBox key="2" currentChild={handleCurrent} id="b">
              <StyledPersonIcon />
              user two
            </ChildBox>
          )}
        </ParentBox>
        <ParentBox
          id="7"
          current={currentDrag}
          control1={setHasChild2}
          control={setHasChild1}
          userInOne={status}
        >
          {hasChild1.parent7 && (
            <ChildBox key="1" currentChild={handleCurrent} id="a">
              <StyledPersonIcon />
              user one
            </ChildBox>
          )}
          {hasChild2.parent7 && (
            <ChildBox key="2" currentChild={handleCurrent} id="b">
              <StyledPersonIcon />
              user two
            </ChildBox>
          )}
        </ParentBox>
        <ParentBox
          id="8"
          current={currentDrag}
          control1={setHasChild2}
          control={setHasChild1}
          userInOne={status}
        >
          {hasChild1.parent8 && (
            <ChildBox key="1" currentChild={handleCurrent} id="a">
              <StyledPersonIcon />
              user one
            </ChildBox>
          )}
          {hasChild2.parent8 && (
            <ChildBox key="2" currentChild={handleCurrent} id="b">
              <StyledPersonIcon />
              user two
            </ChildBox>
          )}
        </ParentBox>
        <ParentBox
          id="9"
          current={currentDrag}
          control1={setHasChild2}
          control={setHasChild1}
          userInOne={status}
        >
          {hasChild1.parent9 && (
            <ChildBox key="1" currentChild={handleCurrent} id="a">
              <StyledPersonIcon />
              user one
            </ChildBox>
          )}
          {hasChild2.parent9 && (
            <ChildBox key="2" currentChild={handleCurrent} id="b">
              <StyledPersonIcon />
              user two
            </ChildBox>
          )}
        </ParentBox>
        <ParentBox
          id="10"
          current={currentDrag}
          control1={setHasChild2}
          control={setHasChild1}
          userInOne={status}
        >
          {hasChild1.parent10 && (
            <ChildBox key="1" currentChild={handleCurrent} id="a">
              <StyledPersonIcon />
              user one
            </ChildBox>
          )}
          {hasChild2.parent10 && (
            <ChildBox key="2" currentChild={handleCurrent} id="b">
              <StyledPersonIcon />
              user two
            </ChildBox>
          )}
        </ParentBox>
        <ParentBox
          id="11"
          current={currentDrag}
          control1={setHasChild2}
          control={setHasChild1}
          userInOne={status}
        >
          {hasChild1.parent11 && (
            <ChildBox key="1" currentChild={handleCurrent} id="a">
              <StyledPersonIcon />
              user one
            </ChildBox>
          )}
          {hasChild2.parent11 && (
            <ChildBox key="2" currentChild={handleCurrent} id="b">
              <StyledPersonIcon />
              user two
            </ChildBox>
          )}
        </ParentBox>
        <ParentBox
          id="12"
          current={currentDrag}
          control1={setHasChild2}
          control={setHasChild1}
          userInOne={status}
        >
          {hasChild1.parent12 && (
            <ChildBox key="1" currentChild={handleCurrent} id="a">
              <StyledPersonIcon />
              user one
            </ChildBox>
          )}
          {hasChild2.parent12 && (
            <ChildBox key="2" currentChild={handleCurrent} id="b">
              <StyledPersonIcon />
              user two
            </ChildBox>
          )}
        </ParentBox>
        <ParentBox
          id="13"
          current={currentDrag}
          control1={setHasChild2}
          control={setHasChild1}
          userInOne={status}
        >
          {hasChild1.parent13 && (
            <ChildBox key="1" currentChild={handleCurrent} id="a">
              <StyledPersonIcon />
              user one
            </ChildBox>
          )}
          {hasChild2.parent13 && (
            <ChildBox key="2" currentChild={handleCurrent} id="b">
              <StyledPersonIcon />
              user two
            </ChildBox>
          )}
        </ParentBox>
        <ParentBox
          id="14"
          current={currentDrag}
          control1={setHasChild2}
          control={setHasChild1}
          userInOne={status}
        >
          {hasChild1.parent14 && (
            <ChildBox key="1" currentChild={handleCurrent} id="a">
              <StyledPersonIcon />
              user one
            </ChildBox>
          )}
          {hasChild2.parent14 && (
            <ChildBox key="2" currentChild={handleCurrent} id="b">
              <StyledPersonIcon />
              user two
            </ChildBox>
          )}
        </ParentBox>
        <ParentBox
          id="15"
          current={currentDrag}
          control1={setHasChild2}
          control={setHasChild1}
          userInOne={status}
        >
          {hasChild1.parent15 && (
            <ChildBox key="1" currentChild={handleCurrent} id="a">
              <StyledPersonIcon />
              user one
            </ChildBox>
          )}
          {hasChild2.parent15 && (
            <ChildBox key="2" currentChild={handleCurrent} id="b">
              <StyledPersonIcon />
              user two
            </ChildBox>
          )}
        </ParentBox>
        <ParentBox
          id="16"
          current={currentDrag}
          control1={setHasChild2}
          control={setHasChild1}
          userInOne={status}
        >
          {hasChild1.parent16 && (
            <ChildBox key="1" currentChild={handleCurrent} id="a">
              <StyledPersonIcon />
              user one
            </ChildBox>
          )}
          {hasChild2.parent16 && (
            <ChildBox key="2" currentChild={handleCurrent} id="b">
              <StyledPersonIcon />
              user two
            </ChildBox>
          )}
        </ParentBox>
        <ParentBox
          id="17"
          current={currentDrag}
          control1={setHasChild2}
          control={setHasChild1}
          userInOne={status}
        >
          {hasChild1.parent17 && (
            <ChildBox key="1" currentChild={handleCurrent} id="a">
              <StyledPersonIcon />
              user one
            </ChildBox>
          )}
          {hasChild2.parent17 && (
            <ChildBox key="2" currentChild={handleCurrent} id="b">
              <StyledPersonIcon />
              user two
            </ChildBox>
          )}
        </ParentBox>
        <ParentBox
          id="18"
          current={currentDrag}
          control1={setHasChild2}
          control={setHasChild1}
          userInOne={status}
        >
          {hasChild1.parent18 && (
            <ChildBox key="1" currentChild={handleCurrent} id="a">
              <StyledPersonIcon />
              user one
            </ChildBox>
          )}
          {hasChild2.parent18 && (
            <ChildBox key="2" currentChild={handleCurrent} id="b">
              <StyledPersonIcon />
              user two
            </ChildBox>
          )}
        </ParentBox>
        <ParentBox
          id="19"
          current={currentDrag}
          control1={setHasChild2}
          control={setHasChild1}
          userInOne={status}
        >
          {hasChild1.parent19 && (
            <ChildBox key="1" currentChild={handleCurrent} id="a">
              <StyledPersonIcon />
              user one
            </ChildBox>
          )}
          {hasChild2.parent19 && (
            <ChildBox key="2" currentChild={handleCurrent} id="b">
              <StyledPersonIcon />
              user two
            </ChildBox>
          )}
        </ParentBox>
        <ParentBox
          id="20"
          current={currentDrag}
          control1={setHasChild2}
          control={setHasChild1}
          userInOne={status}
        >
          {hasChild1.parent20 && (
            <ChildBox key="1" currentChild={handleCurrent} id="a">
              <StyledPersonIcon />
              user one
            </ChildBox>
          )}
          {hasChild2.parent20 && (
            <ChildBox key="2" currentChild={handleCurrent} id="b">
              <StyledPersonIcon />
              user two
            </ChildBox>
          )}
        </ParentBox>
      </StyledWrapper>
    </StyledCanvas>
  );
}

export default App;

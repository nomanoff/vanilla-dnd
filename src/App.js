import React, { useState } from "react";
import styled from "styled-components";
import PersonIcon from "@material-ui/icons/Person";
import { ParentBox, ChildBox } from "./Vanilla";
import { parentData, childData } from "./data";
import { logDOM } from "@testing-library/dom";

function App() {
  const [currentDrag, setCurrDrag] = useState("");

  function handleCurrent(current) {
    setCurrDrag(current);
  }

  const [hasChildren, setHasChildren] = useState(parentData.parentBoxes);

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

  return (
    <StyledCanvas>
      <StyledWrapper>
        {parentData.boxIds.map((parentId) => {
          const parentBox = parentData.parentBoxes[parentId];

          return (
            <ParentBox
              key={parentBox.id}
              id={parentBox.id}
              current={currentDrag}
              control={setHasChildren}
            >
              {parentBox.hasChild && (
                <ChildBox
                  key={parentBox.id}
                  id="a"
                  currentChild={handleCurrent}
                >
                  Users
                </ChildBox>
              )}
            </ParentBox>
          );
        })}

        {/* <ParentBox
          id="1"
          current={currentDrag}
          control1={setHasChild2}
          control={setHasChild1}
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
        </ParentBox> */}
      </StyledWrapper>
    </StyledCanvas>
  );
}

export default App;

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

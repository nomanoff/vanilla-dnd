import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import PersonIcon from "@material-ui/icons/Person";
import { ParentBox, ChildBox } from "./Vanilla";
import { DataContext } from "./data";

function App() {
  const [currentDrag, setCurrDrag] = useState("");
  const [parentData, setParentData] = useContext(DataContext);

  function handleCurrent(current) {
    setCurrDrag(current);
  }

  return (
    <StyledCanvas>
      <StyledWrapper>
        {parentData.boxIds.map((parentId) => {
          const parentBox = parentData.parentBoxes[parentId];

          return (
            <ParentBox
              key={parentBox.id}
              id={parentBox.id}
              data={parentData}
              dataManager={setParentData}
              current={currentDrag}
            >
              {parentBox.children.map((child, index) => (
                <ChildBox key={index} id={child} currentChild={handleCurrent}>
                  {child}
                </ChildBox>
              ))}
            </ParentBox>
          );
        })}
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

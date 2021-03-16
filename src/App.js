import React, { useState, useEffect } from "react";
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
  // const [numberOfParents, setNumberOfParents] = useState([]);
  // const parents = document.getElementsByClassName("sc-bdfBwQ");
  // let numberOfParents = parents.length;

  // setNumberOfParents(numberOfParents);

  // useEffect(() => {
  //   for (var i = 0; i < parents.length; i++) {
  //     setNumberOfParents(i);
  //     console.log(i);
  //   }
  // }, []);

  // console.log(numberOfParents);

  // console.log(numberOfParents);
  const [hasChild, setHasChild] = useState({
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
    parent21: false,
    parent22: false,
    parent23: false,
    parent24: false,
    parent25: false,
  });

  return (
    <StyledCanvas>
      <StyledWrapper>
        <ParentBox id="1" number={hasChild} control={setHasChild}>
          {hasChild.parent1 ? (
            <ChildBox key="1" id="a">
              A
            </ChildBox>
          ) : null}
        </ParentBox>

        <ParentBox id="2" control={setHasChild}>
          {hasChild.parent2 ? (
            <ChildBox key="1" id="a">
              A
            </ChildBox>
          ) : null}
        </ParentBox>

        <ParentBox id="3" control={setHasChild}>
          {hasChild.parent3 ? (
            <ChildBox key="1" id="a">
              A
            </ChildBox>
          ) : null}
        </ParentBox>
        <ParentBox id="4" control={setHasChild}>
          {hasChild.parent4 ? (
            <ChildBox key="1" id="a">
              A
            </ChildBox>
          ) : null}
        </ParentBox>
        <ParentBox id="5" control={setHasChild}>
          {hasChild.parent5 ? (
            <ChildBox key="1" id="a">
              A
            </ChildBox>
          ) : null}
        </ParentBox>
        <ParentBox id="6" control={setHasChild}>
          {hasChild.parent6 ? (
            <ChildBox key="1" id="a">
              A
            </ChildBox>
          ) : null}
        </ParentBox>
        <ParentBox id="7" control={setHasChild}>
          {hasChild.parent7 ? (
            <ChildBox key="1" id="a">
              A
            </ChildBox>
          ) : null}
        </ParentBox>
        <ParentBox id="8" control={setHasChild}>
          {hasChild.parent8 ? (
            <ChildBox key="1" id="a">
              A
            </ChildBox>
          ) : null}
        </ParentBox>
        <ParentBox id="9" control={setHasChild}>
          {hasChild.parent9 ? (
            <ChildBox key="1" id="a">
              A
            </ChildBox>
          ) : null}
        </ParentBox>
        <ParentBox id="10" control={setHasChild}>
          {hasChild.parent10 ? (
            <ChildBox key="1" id="a">
              A
            </ChildBox>
          ) : null}
        </ParentBox>
        <ParentBox id="11" control={setHasChild}>
          {hasChild.parent11 ? (
            <ChildBox key="1" id="a">
              A
            </ChildBox>
          ) : null}
        </ParentBox>
        <ParentBox id="12" control={setHasChild}>
          {hasChild.parent12 ? (
            <ChildBox key="1" id="a">
              A
            </ChildBox>
          ) : null}
        </ParentBox>
        <ParentBox id="13" control={setHasChild}>
          {hasChild.parent13 ? (
            <ChildBox key="1" id="a">
              A
            </ChildBox>
          ) : null}
        </ParentBox>
        <ParentBox id="14" control={setHasChild}>
          {hasChild.parent14 ? (
            <ChildBox key="1" id="a">
              A
            </ChildBox>
          ) : null}
        </ParentBox>
        <ParentBox id="15" control={setHasChild}>
          {hasChild.parent15 ? (
            <ChildBox key="1" id="a">
              A
            </ChildBox>
          ) : null}
        </ParentBox>
        <ParentBox id="16" control={setHasChild}>
          {hasChild.parent16 ? (
            <ChildBox key="1" id="a">
              A
            </ChildBox>
          ) : null}
        </ParentBox>
        <ParentBox id="17" control={setHasChild}>
          {hasChild.parent17 ? (
            <ChildBox key="1" id="a">
              A
            </ChildBox>
          ) : null}
        </ParentBox>
        <ParentBox id="18" control={setHasChild}>
          {hasChild.parent18 ? (
            <ChildBox key="1" id="a">
              A
            </ChildBox>
          ) : null}
        </ParentBox>
        <ParentBox id="19" control={setHasChild}>
          {hasChild.parent19 ? (
            <ChildBox key="1" id="a">
              A
            </ChildBox>
          ) : null}
        </ParentBox>
        <ParentBox id="20" control={setHasChild}>
          {hasChild.parent20 ? (
            <ChildBox key="1" id="a">
              A
            </ChildBox>
          ) : null}
        </ParentBox>
        <ParentBox id="21" control={setHasChild}>
          {hasChild.parent21 ? (
            <ChildBox key="1" id="a">
              A
            </ChildBox>
          ) : null}
        </ParentBox>
        <ParentBox id="22" control={setHasChild}>
          {hasChild.parent22 ? (
            <ChildBox key="1" id="a">
              A
            </ChildBox>
          ) : null}
        </ParentBox>
        <ParentBox id="23" control={setHasChild}>
          {hasChild.parent23 ? (
            <ChildBox key="1" id="a">
              A
            </ChildBox>
          ) : null}
        </ParentBox>
        <ParentBox id="24" control={setHasChild}>
          {hasChild.parent24 ? (
            <ChildBox key="1" id="a">
              A
            </ChildBox>
          ) : null}
        </ParentBox>
        <ParentBox id="25" control={setHasChild}>
          {hasChild.parent25 ? (
            <ChildBox key="1" id="a">
              A
            </ChildBox>
          ) : null}
        </ParentBox>
      </StyledWrapper>
    </StyledCanvas>
  );
}

export default App;

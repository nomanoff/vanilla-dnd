import React, { useState } from "react";
import styled from "styled-components";

//Styles of the ParentBoxS
const StyledEmpty = styled.div`
  height: 100px;
  width: 125px;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 5px;
  padding: 4px;
  justify-content: center;
  user-select: none;
  border: ${({ hovered }) => (hovered ? "3px dashed #fffcfc" : "none")};
  border-radius: 1px;
`;

export function ParentBox({ children, control, control1, id, current }) {
  const [over, setOver] = useState(false);

  function dragOver(e) {
    e.preventDefault();
    console.log("drag over");
  }
  function dragEnter(e) {
    e.preventDefault();
    setOver(true);
    console.log("drag enter");
  }
  function dragLeave() {
    setOver(false);
    console.log("drag leave");
  }
  function dragDrop(e) {
    console.log("drag drop");

    console.log("This is the Id: " + id);
    setOver(false);
    console.log(e);
    console.log(id);

    current === "a"
      ? control((prevV) => {
          let prevValues = Object.entries(prevV);

          for (let i = 0; i < prevValues.length; ++i) {
            prevV[`parent${i + 1}`] = false;
          }
          return {
            ...prevV,
            ["parent" + id]: true,
          };
        })
      : control1((prevV) => {
          let prevValues = Object.entries(prevV);

          for (let i = 0; i < prevValues.length; ++i) {
            prevV[`parent${i + 1}`] = false;
          }
          return {
            ...prevV,
            ["parent" + id]: true,
          };
        });
  }

  return (
    <StyledEmpty
      hovered={over}
      onDragOver={dragOver}
      onDragEnter={dragEnter}
      onDragLeave={dragLeave}
      onDrop={dragDrop}
    >
      {children}
    </StyledEmpty>
  );
}

const fill = {
  backgroundColor: "#223668",
  position: "relative",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
  fontFamily: "sans-serif",
  fontSize: "1.05rem",
  color: "#fff",
  borderRadius: "0px",
  border: "2px solid #e0e0e0",
  borderWidth: "0 12px",
  borderColor: "#e0e0e0 red #e0e0e0 green",
  margin: "3px",
  height: "100%",
  width: "100%",
  cursor: "pointer",
  userSelect: "none",
};

const invisible = {
  display: "none",
};

export function ChildBox({ children, id, currentChild }) {
  const [start, setStart] = useState(false);

  function dragStart(e) {
    setTimeout(() => setStart(true), 0);
    console.log("drag start");
    console.log("This is being dragged: " + id);
    currentChild(id);
  }

  function dragEnd() {
    console.log("drag end");
    setStart(false);
  }

  return (
    <div
      style={start ? invisible : fill}
      id={id}
      draggable="true"
      onDragStart={dragStart}
      onDragEnd={dragEnd}
    >
      {children}
    </div>
  );
}

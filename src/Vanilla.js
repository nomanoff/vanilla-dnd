import React, { useState } from "react";
import styled from "styled-components";

//Styles of the ParentBoxS
const StyledEmpty = styled.div`
  height: 150px;
  width: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  border: ${({ hovered }) => (hovered ? "3px dashed #fffcfc" : "none")};
  border-radius: 10px;
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
  backgroundColor: "#264653",
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "2rem",
  color: "#fff",
  borderRadius: "10px",
  border: "2px solid #e0e0e0",
  margin: "5px",
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

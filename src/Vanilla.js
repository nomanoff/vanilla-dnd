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
  }
  function dragEnter(e) {
    e.preventDefault();
    setOver(true);
  }
  function dragLeave() {
    setOver(false);
  }
  function dragDrop(e) {
    setOver(false);

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
  backgroundColor: "#fca311",
  position: "relative",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
  fontFamily: "sans-serif",
  fontSize: "1.05rem",
  border: "2px solid #fff",
  color: "#fff",
  borderRadius: "5px",
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
    currentChild(id);
  }

  function dragEnd() {
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

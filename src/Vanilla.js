import React, { useState } from "react";
import styled from "styled-components";

//Styles of the ParentBox

const StyledEmpty = styled.div`
  height: 150px;
  width: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  border: ${({ hovered }) => (hovered ? "4px solid #fffcfc" : "none")};
`;

export function ParentBox({ children, control, id, number }) {
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

    control((prevV) => {
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
  position: "absolute",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "2rem",
  color: "#fff",
  borderRadius: "10px",
  border: "2px solid #e0e0e0",
  margin: "5px",
  height: "130px",
  width: "130px",
  cursor: "pointer",
  userSelect: "none",
};

const invisible = {
  display: "none",
};

export function ChildBox({ children, id }) {
  const [start, setStart] = useState(false);

  function dragStart() {
    setTimeout(() => setStart(true), 0);

    console.log("drag start");
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

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

export function ParentBox({ children, id, current, dataManager, data }) {
  const [over, setOver] = useState(false);

  function dragOver(e) {
    e.preventDefault();
  }
  function dragEnter(e) {
    e.preventDefault();
    setOver(true);
  }
  function dragLeave(e) {
    setOver(false);
  }
  function dragDrop(e) {
    setOver(false);
    console.log(id, current);

    const newParent = data.parentBoxes[id];
    console.log(newParent.children.push(current));

    const newState = {
      ...data,
      parentBoxes: {
        ...data.parentBoxes,
        [id]: newParent,
      },
    };

    dataManager(newState);
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

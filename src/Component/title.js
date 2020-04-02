import React from "react";

export default function Title(props) {
  return (
    <>
      <div
        style={{
          textAlign: "center",
          paddingTop: 25,
          fontSize: "2.5rem",
          color: "black",
          paddingBottom: 5
        }}
      >
        {props.children}
      </div>

      <div className="title-line"></div>
    </>
  );
}

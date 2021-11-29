import React from "react";

const TestMarker = (props) => {
  const testFunction = () => {
    console.log("TEST FUNCTION!");
  };

  return (
    <div
      style={{
        width: 100,
        height: 20,
        background: props.available ? "#40c463" : "red",
        padding: 16,
        display: "flex",
        justifyContent: "space-between"
      }}
    >
      Slip
      {props.available && <button onClick={testFunction}> Book</button>}
    </div>
  );
};
export default TestMarker;

import { React, useState } from "react";

const MouseEvents = () => {
  const [state, setState] = useState("Hover over me!");
  const HoverTextIn = (event) => {
    setState("Magic is Here!");
  };

  const HoverTextOut = (event) => {
    setState("Hover over me!");
  };

  return (
    <div className="mouse-event-bg">
      <h1
        onMouseOver={HoverTextIn}
        onMouseOut={HoverTextOut}
        className="hover-me"
      >
        {state}
      </h1>
    </div>
  );
};

export default MouseEvents;

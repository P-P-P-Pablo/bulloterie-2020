import React, { useState, useEffect, prevState, refs } from "react";
import Immutable from "immutable";
import "./DrawArea.css";

// solution to the problem here : https://reactjs.org/docs/refs-and-the-dom.html#creating-refs

// this handle states
const DrawArea = () => {
  //STATE
  const [lines, setLines] = useState(new Immutable.List());
  const [isDrawing, setDrawing] = useState(false);

  //EFFECT

  useEffect(() => {
    document.addEventListener("mouseup", handleMouseUp);
    return function cleanup() {
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  //handle mouse

  const handleMouseUp = () => {
    setDrawing(false);
  };

  const handleMouseDown = (mouseEvent) => {
    if (mouseEvent.button !== 0) {
      return;
    }

    const point = relativeCoordinatesForEvent(mouseEvent);
    setLines(lines.push(new Immutable.List([point])));
    setDrawing(true);
  };

  const handleMouseMove = (mouseEvent) => {
    if (!isDrawing) {
      return;
    }

    const point = relativeCoordinatesForEvent(mouseEvent);

    setLines(
      prevState.lines.updateIn([lines.size - 1], (line) => line.push(point))
    );
  };

  const relativeCoordinatesForEvent = (mouseEvent) => {
    const boundingRect = refs.drawArea.getBoundingClientRect();
    return new Immutable.Map({
      x: mouseEvent.clientX - boundingRect.left,
      y: mouseEvent.clientY - boundingRect.top,
    });
  };

  return (
    <div
      className="drawArea"
      ref="drawArea"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
    >
      <Drawing lines={lines} />
    </div>
  );
};

// this handle drawing

function Drawing({ lines }) {
  return (
    <svg className="drawing">
      {lines.map((line, index) => (
        <DrawingLine key={index} line={line} />
      ))}
    </svg>
  );
}

function DrawingLine({ line }) {
  const pathData =
    "M " +
    line
      .map((p) => {
        return `${p.get("x")} ${p.get("y")}`;
      })
      .join(" L ");

  return <path className="path" d={pathData} />;
}

export default DrawArea;

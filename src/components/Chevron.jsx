import React from "react";

const Chevron = ({
  titleTag = "Arrow",
  width = 20,
  stroke = "#000",
  strokeWidth = 10,
  direction = "left"
}) => {
  const degree = {
    left: 0,
    right: 180,
    up: 90,
    down: -90
  };
  const arrowDirection = `rotate(${degree[direction]}deg)`;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 44 80"
      style={{
        width,
        transform: arrowDirection,
        transformOrigin: "center center"
      }}
    >
      <title>{titleTag}</title>
      <path
        d="M40 76L4 40L40 4"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round" />
    </svg>
  );
};

export default Chevron;

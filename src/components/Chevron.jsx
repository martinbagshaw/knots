import React from "react";

const Chevron = ({
  titleTag = "Arrow",
  width = 30,
  fill = "#000",
  direction = "right"
}) => {
  const degree = {
    left: 90,
    right: -90,
    up: -180,
    down: 0
  };
  const arrowDirection = `rotate(${degree[direction]}deg)`;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      style={{
        width,
        transform: arrowDirection,
        transformOrigin: "50% 50%"
      }}
    >
      <title>{titleTag}</title>
      <defs>
        <polygon
          points="0.00025 0.000323580861 19.935 0.000323580861 19.935 12.2483 0.00025 12.2483"
        ></polygon>
      </defs>
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <path
          fill={fill}
          d="M19.532,0.4235 C19.051,-0.1055 18.232,-0.1435 17.703,0.3375 C17.673,0.3645 17.644,0.3935 17.617,0.4235 L9.956,8.6515 L2.318,0.4235 C1.838,-0.1055 1.018,-0.1435 0.49,0.3375 C0.46,0.3645 0.43,0.3935 0.403,0.4235 C-0.134,1.0095 -0.134,1.9095 0.403,2.4955 L8.666,11.4045 L9.049,11.8225 C9.461,12.3215 10.199,12.3925 10.698,11.9805 C10.756,11.9325 10.808,11.8805 10.856,11.8225 L11.239,11.4045 L19.532,2.4955 C20.07,1.9095 20.07,1.0095 19.532,0.4235"
        ></path>
      </g>
    </svg>
  );
};

export default Chevron;

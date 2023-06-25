import React from "react";

const Russvg = () => {
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 20 21"
      fill="#000"
      xmlns="http://www.w3.org/2000/svg"
      className="ui-icon "
    >
      <mask
        id="mask0_9302_3025"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={20}
        height={21}
      >
        <path
          d="M10 20.5C15.5228 20.5 20 16.0228 20 10.5C20 4.97715 15.5228 0.5 10 0.5C4.47715 0.5 0 4.97715 0 10.5C0 16.0228 4.47715 20.5 10 20.5Z"
          fill="#F4F5F5"
        />
      </mask>
      <g mask="url(#mask0_9302_3025)">
        <rect y="0.5" width={20} height={20} fill="white" />
        <rect y="13.5" width={20} height={7} fill="#E63838" />
        <rect y={7} width={20} height={7} fill="#3131C4" />
      </g>
    </svg>
  );
};

export default Russvg;
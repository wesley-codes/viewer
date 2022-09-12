import * as React from "react";
import { SVGProps } from "react";

const LikeSVG = (props: SVGProps<SVGSVGElement>) => (
    <svg
    width={props.width}
    height={props.height}
    viewBox='0 0 32 32'
    enableBackground='new 0 0 32 32'
    id='Stock_cut'
    xmlSpace='preserve'
    xmlns='http://www.w3.org/2000/svg'
    xmlnsXlink='http://www.w3.org/1999/xlink'
    {...props}
  >
    <desc />
    <g>
      <rect
        fill={props.fill}
        height={16}
        stroke={props.stroke}
        strokeLinejoin='round'
        strokeMiterlimit={10}
        strokeWidth={2}
        width={6}
        x={3}
        y={15}
      />
      <path
        d='M9,15l5-5l2-7h0   c2.209,0,4,1.791,4,4v8h5h0c2.209,0,4,1.791,4,4v0l-1.721,10.329C27.118,30.293,26.283,31,25.306,31H9V15z'
        fill={props.fill}
        stroke={props.stroke}
        strokeLinejoin='round'
        strokeMiterlimit={10}
        strokeWidth={2}
      />
    </g>
  </svg>
);

export default LikeSVG;

import * as React from "react";
import { SVGProps } from "react";

const EyeSVG = (props: SVGProps<SVGSVGElement>) => (
<svg
    width={props.width}
    height={props.height}
    viewBox='0 0 24 24'
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    stroke={props.stroke}
    strokeWidth={2}
    strokeLinecap='round'
    strokeLinejoin='round'
    className='feather feather-eye'
    {...props}
  >
    <path d='M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z' />
    <circle cx={12} cy={12} r={3} />
  </svg>
);

export default EyeSVG;

import * as React from "react";
import { SVGProps } from "react";

const OptionsSVG = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={props.width}
    height={props.height}
    viewBox='0 0 16 16'
    xmlns='http://www.w3.org/2000/svg'
    fill={props.fill}
    className='bi bi-three-dots'
    {...props}
  >
    <path d='M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z' />
  </svg>
);

export default OptionsSVG;

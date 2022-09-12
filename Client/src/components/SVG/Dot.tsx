import * as React from "react";
import { SVGProps } from "react";

const DotSVG = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={5}
    height={5}
    viewBox='0 0 5 5'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <circle cx={2.5} cy={2.5} r={2.5} fill='#88878A' />
  </svg>
);

export default DotSVG;

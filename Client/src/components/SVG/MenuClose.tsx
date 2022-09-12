import * as React from "react";
import { SVGProps } from "react";

const MenuCloseSVG = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g>
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M12 3v2H3V3h9zm4 16v2H3v-2h13zm6-8v2H3v-2h19z" />
    </g>
  </svg>
);

export default MenuCloseSVG;

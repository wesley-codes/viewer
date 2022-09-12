import * as React from "react";
import { SVGProps } from "react";

const HomeSVG = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 26 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M21.3285 6.82L15.2436 2.79C13.5851 1.69 11.0392 1.75 9.44401 2.92L4.15145 6.83C3.09505 7.61 2.2605 9.21 2.2605 10.47V17.37C2.2605 19.92 4.44724 22 7.14106 22H18.529C21.2228 22 23.4096 19.93 23.4096 17.38V10.6C23.4096 9.25 22.4905 7.59 21.3285 6.82ZM13.6273 18C13.6273 18.41 13.2682 18.75 12.835 18.75C12.4019 18.75 12.0427 18.41 12.0427 18V15C12.0427 14.59 12.4019 14.25 12.835 14.25C13.2682 14.25 13.6273 14.59 13.6273 15V18Z"
      fill={props.fill}
    />
  </svg>
);

export default HomeSVG;
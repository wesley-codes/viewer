import * as React from "react";
import { SVGProps } from "react";

const  UploadSVG= (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={props.width}
    height={props.height}
    viewBox='0 0 48 48'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <rect width={48} height={48} fill='white' fillOpacity={0.01} />
    <path
      d='M24.0081 41L23.9997 23'
      stroke='black'
      strokeWidth={4}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M40.5178 34.3161C43.8044 32.005 45.2136 27.8302 44.0001 24C42.7866 20.1698 39.0705 18.0714 35.0527 18.0745H32.7317C31.2144 12.1613 26.2082 7.79572 20.1435 7.0972C14.0787 6.39868 8.21121 9.5118 5.38931 14.9253C2.56741 20.3388 3.37545 26.9317 7.42115 31.5035'
      stroke='black'
      strokeWidth={4}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M30.3638 27.636L23.9998 21.2721L17.6358 27.636'
      stroke='black'
      strokeWidth={4}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

export default UploadSVG;

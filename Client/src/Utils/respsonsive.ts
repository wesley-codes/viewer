

import { css, CSSObject} from "styled-components";
export const Mobile = ( props : CSSObject) => {
  return css`
    @media only screen and (max-width: 600px) {
      ${props}
    }
  `;
};


export const Tablet = ( props : CSSObject) => {
  return css`
    @media only screen and (max-width: 820px) {
      ${props}
    }
  `;
};
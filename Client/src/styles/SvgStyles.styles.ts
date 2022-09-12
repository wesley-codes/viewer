import styled, { css, CSSObject } from "styled-components";

//STYLING MULTIPLE SVGS

export const svgStyles = ({ ...props }: CSSObject) => {
  return css`
    ${props}
  `;
};

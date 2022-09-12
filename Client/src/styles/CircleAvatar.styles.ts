import styled from "styled-components";

export const StyledCircle = styled.div<any>`
  height: ${({height})=> height}px;
  width : ${({width})=> width}px;
    border-radius: ${({radius})=> radius}px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;


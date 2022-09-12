import styled from "styled-components"


export const StyledButton = styled.button<any>`
  color: ${({theme})=> theme.text};
  border-radius: ${({radius})=> radius}px;
  cursor: pointer;
`;
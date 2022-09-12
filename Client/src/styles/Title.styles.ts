import { Mobile } from './../Utils/respsonsive';
import styled from "styled-components"
import { Tablet } from "../Utils/respsonsive";



export const TitleContainer = styled.div<any>`
  
  //display: flex;
  //align-items: center;
  justify-content: flex-start;

margin: ${({margin})=> margin === "none" ? "0" : "0 10px"};
  //${Tablet({justifyContent:"space-evenly" })};
`;


export  const Heading = styled.h2`
    padding:5px 8px;
    border-left:  5px solid ${({theme})=> theme.icons};
color: ${({theme})=> theme.badge};
letter-spacing: 0.03rem;
${Mobile({fontSize:"1rem"})}
`;
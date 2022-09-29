import { svgStyles } from "./SvgStyles.styles";
import styled, { keyframes } from "styled-components";
import LogoSVG from "../components/SVG/Logo";
import { Mobile } from "../Utils/respsonsive";

const rotate = keyframes`

  100% {
    transform: rotate(360deg);
  }

`;

export const Container = styled.div`
height: calc(100vh - 150px);
width: calc(100vw - 55px);
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;


  & h3{
    color : ${({theme})=> theme.text}
  }
`;

export const LoaderContainer = styled.div<any>`
display: flex;
align-items: center;
justify-content: center;
position: ${({buffer})=> buffer === "buffer" ? "absolute" : ""};
 top:${({buffer})=> buffer == "buffer" && "0"};
 bottom: ${({buffer})=> buffer == "buffer" && "0"};
 right: ${({buffer})=> buffer == "buffer" && "0"};
 left: ${({buffer})=> buffer == "buffer" && "0"};
 //width: ${({buffer})=> buffer === "buffer" ? "100%" : ""};
 background-color: ${({buffer})=> buffer === "buffer" &&  "rgba(0, 0, 0, 0.6)"};
  background: transparent;
  animation: ${rotate} 3s ease-in-out 1s infinite alternate-reverse;
  -webkit-animation: ${rotate} 3s ease-in-out 1s infinite alternate-reverse;
  -o-animation: ${rotate} 3s ease-in-out 1s infinite alternate-reverse;
`;

export const LoaderSVG = styled(LogoSVG)`
  ${(props) =>
    svgStyles({
      fill: "#7B2CBF",
      height: "50px",
      minWidth: "50px",
      fontSize: "28px",
      textAlign: "center",
    })};

    ${Mobile({width:"25px", height:"25px"})}
    
`;

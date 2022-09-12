import styled, { createGlobalStyle } from "styled-components";
import MoonSVG from "../components/SVG/Moon";
import SunSVG from "../components/SVG/Sun";
import { Tablet, Mobile } from "../Utils/respsonsive";
import { others } from "../Utils/Theme";
import { svgStyles } from "./SvgStyles.styles";

export const GloabalStyle = createGlobalStyle`
/* body {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    overflow-x: hidden;
    font-family: 'Cabinet Grotesk', sans-serif;
    scroll-behavior: smooth;

} */


* {
    box-sizing: border-box;
  
  }

  body {
    margin: 0;
    padding: 0;  }


`;

//APP STYLES

export const Container = styled.div`
  
 // padding: 10px 0px;
`;

export const MainWrapper = styled.div`
  position: relative;
  background: ${({ theme }) => theme.body};
  min-height: 100vh;
  //top: 0;
  
  width: 100vw;
  transition: all 0.5s ease;
  //z-index: 99;
  padding: 0px;
  overflow-x: hidden;
  ${Tablet({
    overflowX: "hidden",
  })}

  ${Mobile({
    overflowX: "hidden",
   
  })}
`;
export const Wrapper = styled.div`
  width: 200px;
  height: 200px;
  
  margin: 4px;
`;

export const ThemeButton = styled.div`
  position: fixed;
  bottom: 100px;
  right: 100px;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  -webkit-box-shadow: 2px 1px 27px 1px rgba(0, 0, 0, 0.47);
  box-shadow: 2px 1px 27px 1px rgba(0, 0, 0, 0.47);
  ${Mobile({ right: "50px", bottom: "50px" })}
`;

export const Moon = styled(MoonSVG)`
  ${(props) =>
    svgStyles({
      fill: props.theme.icons,
      height: "30px",
      minWidth: "20px",
      fontSize: "28px",
      textAlign: "center",
      lineHeight: "60px",
      color: others.orange2,
    })}
`;

export const Sun = styled(SunSVG)`
  ${(props) =>
    svgStyles({
      fill: "#fff",
      height: "30px",
      minWidth: "20px",
      fontSize: "28px",
      textAlign: "center",
      lineHeight: "60px",
      color: others.orange2,
    })}
`;


export const HomeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  ${Tablet({ flexDirection: "row" })};
  ${Mobile({ flexDirection: "column" })}
`;
export const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 55px;
  top:50px;
  width: calc(100% - 55px);
  ${Tablet({top:"70px"})}
  ${Mobile({top:"80px"})}
`;
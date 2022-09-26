import styled from "styled-components";
import BellSVG from "../components/SVG/Bell";
import LogoSVG from "../components/SVG/Logo";
import SearchSVG from "../components/SVG/SearchSVG";
import ViewSVG from "../components/SVG/View";
import { Mobile, Tablet } from "../Utils/respsonsive";
import { svgStyles } from "./SvgStyles.styles";

//export const styledNav =

export const StyledNav = styled.nav<any>`
  position: fixed;
  top: 0;
  left: ${({sm}) => sm  ? "" : "55px"  };
  width: ${({sm}) => sm  ? "100%" : "calc(100% - 55px)"  };
  padding: 8px 20px;
  background-color: ${({ theme }) => theme.background};
  display: flex;
  align-items: center;
  transition: all 0.5s ease;
  z-index: 50;
  ${Mobile({padding:"8px 8PX"})}
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  padding: 0;
`;

export const FirstContainer = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: space-around;

  ${Mobile({ justifyContent: "flex-start" })};
  ${Tablet({ justifyContent: "flex-start" })};
`;

export const SecondContainer = styled.div`
  flex: 3;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  
  ${Tablet({ flex: "5" })} //background-color: blue;
`;

export const Inputcontainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
  ${Mobile({ display: "none" })}
  ${Tablet({ display: "none" })}
`;

export const StyledInput = styled.input`
  width: 80%;
  padding: 8px;
  border-radius: 8px;
  border: 2px solid ${({ theme }) => theme.inputBorder};
  outline: none;
  padding: relative;
  margin-left: 2rem;
`;

export const LogoContainer = styled.div`
  display: none;
  ${Tablet({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
  })};
  ${Mobile({ display: "flex", alignItems: "center" })};

  h3 {
    color: ${({ theme }) => theme.logoName};
    margin-left: 8px;
  }
`;

export const NavLogo = styled(LogoSVG)``;

export const SearchIcon = styled(SearchSVG)`
  ${(props) =>
    svgStyles({
      fill: props.theme.icons,
      height: "30px",
      minWidth: "20px",
      fontSize: "28px",
      textAlign: "center",
      lineHeight: "60px",
      position: "absolute",
      right: "120px",
    })};
  //${Tablet({ display: "none" })}

  ${Mobile({ display: "none" })}
`;

export const AddVideoIcon = styled(ViewSVG)`
  ${(props) =>
    svgStyles({
      fill: props.theme.buttonIcon,
      height: "20px",
      minWidth: "19px",
      fontSize: "28px",
      textAlign: "center",
      lineHeight: "60px",
      marginRight: "5px",
    })};

`;

export const AddVideoBtn = styled.button`
  display: flex;
  align-items: center;
  padding: 8px 8px;
  background-color: ${({ theme }) => theme.btnBg};
  border: 2px solid ${({ theme }) => theme.btnBorder};
  border-radius: 8px;
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  font-weight: 600;

  &:hover {
    background-color: ${({ theme }) => theme.btnHoverText};
  }

  ${Mobile({display:"none" })}

`;

export const NotificationBox = styled.div`
  width: 30px;
  height: 30px;
  background: ${({ theme }) => theme.notificationBg};
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin:0 20px
`;

export const BellIcon = styled(BellSVG)`
  ${(props) =>
    svgStyles({
      fill: props.theme.buttonIcon,
      height: "20px",
      minWidth: "19px",
      fontSize: "28px",
      textAlign: "center",
      lineHeight: "60px",
      marginRight: "5px",
    })};
`;

export const Badge = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 50px;
  background-color: ${({ theme }) => theme.badge};
  color: ${({ theme }) => theme.btnBg};
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: -5px;
  right: -10px;
`;

export const ProfileBox = styled.div`
display: flex;
align-items: center;
justify-content: center;
`;

export const Name = styled.p`
color: #fff;
font-size: 0.8em;
margin-left: 10px
`;



export const Image = styled.img`
  width : 35px;
  height:35px;
  object-fit:cover;
  border-radius: 50px
`;

export const Signin = styled.p `
color : ${({theme})=> theme.text};
font-size: 1rem;
font-weight: 800;
cursor: pointer;
`

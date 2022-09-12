import { Mobile, Tablet } from "./../Utils/respsonsive";
import styled from "styled-components";
import LogoSVG from "../components/SVG/Logo";
import { svgStyles } from "./SvgStyles.styles";
import { css, CSSObject } from "styled-components";
import { StyledButton } from "./Button.styles";

export const SignUpLogo = styled(LogoSVG)`
  ${(props) =>
    svgStyles({
      fill: "#7B2CBF",
      height: "30px",
      minWidth: "20px",
      fontSize: "28px",
      textAlign: "center",
    })};
`;

export const IconContainer = styled.div<any>`
  display: flex;
  align-items: center;
  color: #15141f;
  display: ${({ show }) => show === "sm" && "none"};
  ${Tablet({ display: "block" })}

  ${Mobile({ display: "block" })}
`;

export const LogoName = styled.h1`
  color: #15141f;
  margin-left: 10px;
  ${Tablet({ display: "none" })};

  ${Mobile({ display: "none" })}
`;

export const RightContainer = styled.div`
  padding: 20px;
  height: 100vh;
  width: 50%;
 
  ${Tablet({ display: "none" })}
  ${Mobile({ display: "none" })}
`;

export const LeftContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  ${Tablet({ width: "100%" })}

  ${Mobile({ width: "100%" })}
`;

export const FormContainer = styled.div`
  height: 70vh;
  width: 60vh;
  ${Mobile({ padding: "0 30px", width: "50vh" })}
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 10px;
`;

export const Label = styled.label`
  font-size: 0.8rem;
  font-weight: 600;
  color: #7b2cbf;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  padding: 0px 10px;
  line-height: 45px;
  height: 38px;
  border: 1px solid grey;
  border-radius: 3px;

  &:focus {
    outline: none;
    border: 1px solid #7b2cbf;
    box-shadow: 0 0 10px #719ece;
  }
`;

export const Terms = styled.p`
  font-size: 12px;
  margin-right: auto;
  padding: 0;
`;


export const BtnContainer = styled.div`
margin-top: 10px;
`

export const CreateBtn = styled(StyledButton)`
padding:8px;
background-color:#7b2cbf ;
color: #fff;
font-weight: 600;
font-size: 1rem;
border:none;
border-radius: 3px;

`
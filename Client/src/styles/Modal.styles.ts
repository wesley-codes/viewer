import { Mobile } from "./../Utils/respsonsive";
import styled from "styled-components";
import { Tablet } from "../Utils/respsonsive";

export const BackDropContainer = styled.div<any>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 20;
  display: ${({screen})=> screen === "sm" && "none" };

  background-color: rgba(0, 0, 0, 0.75);
  @media only screen and (max-width: 600px) {
    display: ${({screen})=> screen === "sm" && "block" };

  }

`;

export const Modal = styled.div<any>`
  position: fixed;

  top: 10vh;
  margin: 5% auto;
  //bottom:0;
  left: 55px;
  right: 0;
  width: calc(50% - 55px);
  background-color: ${({ theme }) => theme.profileDashboard};
  padding: 10px 20px;
  border-radius: 14px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  z-index: 30;
  display: ${({screen})=> screen === "sm" && "none" };

  ${Tablet({ width: " calc(90% - 55px)" })};
  
  @media only screen and (max-width: 600px) {
    left: ${({ screen }) => screen === "sm" && "0px"};
    overflow-y: ${({ screen }) => screen === "sm" && "scroll"};
    overflow-x: ${({ screen }) => screen === "sm" && "hidden"};
    top: ${({ screen }) => screen === "sm" && "30vh"};
    margin-bottom: 0;
    bottom: ${({ screen }) => screen === "sm" && "0"};
    width: ${({ screen }) => screen === "sm" && "100%"};
    display: ${({screen})=> screen === "sm" && "block" };

  }
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.text};

  & span {
    color: ${({ theme }) => theme.text};
    font-size: 1.5rem;
    font-weight: 600;
    cursor: pointer;
  }
`;

export const ModalTitle = styled.h2`
  color: ${({ theme }) => theme.text};
`;
export const UploadBox = styled.div`
  width: 100%;
  height: 370px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  & p {
    color: ${({ theme }) => theme.text};
    font-size: 0.8rem;
  }
`;

export const UploadIconContainer = styled.div`
  width: fit-content;
  border-radius: 50px;
  background-color: ${({ theme }) => theme.text};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;

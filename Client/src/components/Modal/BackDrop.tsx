import React from "react";
import { BackDropContainer, Modal } from "../../styles/Modal.styles";
import { BackDropProps, ChildrenProps } from "../../Types/types";

interface ModalOverlayProps {
  screen : string
}

export const BackDrop = ({ children, onClose, screen}: BackDropProps) => {
  console.log("=======", screen)

  return <BackDropContainer onClick={onClose} screen ={screen}>{children}</BackDropContainer>;
};

 export const ModalOverlay = ({children, screen}:ChildrenProps) => {
  return <Modal screen ={screen}> {children} </Modal>;
};


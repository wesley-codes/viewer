import React from "react";
import ReactDOM from "react-dom";
import { BackDropProps, ChildrenProps, } from "../../Types/types";
import { BackDrop, ModalOverlay } from "./BackDrop";


interface ModalProps {
  
}


const Modal = ({onClose, children,screen }:BackDropProps) => {
  const elementPortal = document.getElementById("overlays")!;

  return (
    <React.Fragment>
    
     {ReactDOM.createPortal(<BackDrop onClose={onClose} screen ={screen}/>, elementPortal)}
     {ReactDOM.createPortal(<ModalOverlay screen={screen}> {children}</ModalOverlay>, elementPortal)}

    </React.Fragment>
  );
};

export default Modal;

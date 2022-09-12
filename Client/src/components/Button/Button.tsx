import React from 'react'
import { StyledButton } from '../../styles/Button.styles'

interface ButtonProps{
    radius: number
    children: React.ReactNode;

}



const Button = ({  children, radius}: ButtonProps) => {
  return (
    <StyledButton   radius={radius}>
        {children}
    </StyledButton>
  )
}

export default Button

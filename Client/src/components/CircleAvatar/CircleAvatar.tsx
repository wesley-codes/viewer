import React, { ReactNode } from 'react'
import { StyledCircle } from '../../styles/CircleAvatar.styles'

interface AvatarProps {
height : Number,
width:Number,
radius: Number
  children: ReactNode;

}

const CircleAvatar = ({height, width, radius, children}:AvatarProps) => {
  return (
   <StyledCircle height={height} width={width} radius={radius}>
      {children}
   </StyledCircle>
  )
}

export default CircleAvatar

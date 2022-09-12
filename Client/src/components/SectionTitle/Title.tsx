import React from 'react'
import { Heading, TitleContainer } from '../../styles/Title.styles'
interface TitleProps{
title : String;
margin?: String

}
const Title = ({title, margin}: TitleProps) => {
  return (
   <TitleContainer margin={margin}>
    <Heading>{title} </Heading>
   </TitleContainer>
  )
}

export default Title

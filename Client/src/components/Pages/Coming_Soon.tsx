import React from 'react'
import Img from "../Assets/coming_soon.png"
import styled from "styled-components"
const Title = styled.h2`
color : ${({theme})=> theme.text}
`


interface ComingSoon_Props{
width: number
}
const Coming_Soon = (width : ComingSoon_Props) => {
  return (
    <div>
      <img src={Img} alt="comming soom" style={{width:`${width}px`}}/>
      <Title >Coming soon</Title>
    </div>
  )
}

export default Coming_Soon

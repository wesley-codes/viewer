import React from 'react'
import styled from 'styled-components'
import { LoaderContainer, LoaderSVG } from '../../styles/Loader.styles'



interface AnimatedLoaderTypes {
    width : string | number
    height :  string | number

}

const AnimatedLoader = ({width, height}: AnimatedLoaderTypes) => {
  return (
    
<LoaderContainer buffer="buffer">
<LoaderSVG width={width} height={height} />

</LoaderContainer>  
  )
}

export default AnimatedLoader

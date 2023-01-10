import React from 'react'

import { Background, Description, TitleDescription, ResumeDescription, Img1, Img2 } from './styles'

const About = () => {
  return (
    <Background id='about'>
      <Description>
        <TitleDescription>SOBRE A NOSSA EMPRESA</TitleDescription>
        <ResumeDescription>
          A Extreme foi idealizada e fundada em 2023 por uma equipe de dois irmãos, Thiago e Felipe. Desde então, expandimos para mais de 100 academias no territorio nacional.
        </ResumeDescription>
      </Description>
      <Img1></Img1>
      <Img2></Img2>
    </Background>
  )
}


export { About }

import React from 'react'

import { Background, Description, TitleDescription, ResumeDescription, Img1, Img2 } from './styles'

const descriptionAnimate={
  offscreen:{
    x: -100,
    opacity:0
  },

  onscreen:{
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0,
      duration:1
    }
  }
}

const About = () => {
  return (
    <Background id='about'
      initial={"offscreen"}
      whileInView={"onscreen"}
      viewport={{once:true, amount:0.3}}
      transition={{staggerChildren: 0.5}}
    >
      <Description>
        <TitleDescription
          variants={descriptionAnimate}
        >SOBRE A NOSSA EMPRESA</TitleDescription>
        <ResumeDescription
          variants={descriptionAnimate}
        >
          A Extreme foi idealizada e fundada em 2023 por uma equipe de dois irmãos, Thiago e Felipe. Desde então, expandimos para mais de 100 academias no territorio nacional.
        </ResumeDescription>
      </Description>
      <Img1
        initial={{
          opacity:0
        }}
        whileInView={{
          opacity: 1,
          transition: {
            type: "spring",
            duration:1,
            delay:0.3
          }
        }}
      ></Img1>
      <Img2
        initial={{
          opacity:0
        }}
        whileInView={{
          opacity: 1,
          transition: {
            type: "spring",
            duration:1,
            delay:0.5
          }
        }}
      ></Img2>
    </Background>
  )
}


export { About }

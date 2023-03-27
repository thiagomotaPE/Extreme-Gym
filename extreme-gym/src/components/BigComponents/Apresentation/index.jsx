import React from 'react'

import { Background, Slogan } from './styles'
import { Button } from '../../Button'
import { Variants } from 'framer-motion'

const sloganAnimate={
  offscreen:{
    x: 100,
    opacity: 0
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

const Apresentation = () => {

  return (
    <Background id='home'
      initial={"offscreen"}
      whileInView={"onscreen"}
      viewport={{once:true, amount:1}}
      transition={{staggerChildren: 0.5}}
    >
      <Slogan
        variants={sloganAnimate}
      >SEJA SEU MELHOR</Slogan>
      
      <Button title={"COMECE HOJE"}
      ></Button>
    </Background>
  )
}


export { Apresentation }

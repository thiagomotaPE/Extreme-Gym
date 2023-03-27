import React from 'react'

import { Background, TitleContact } from './styles'

const titleAnimate={
  offscreen:{
    x: 70,
    opacity: 0
  },

  onscreen:{
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0,
      duration:1,
    }
  }
}

const Contact = () => {
  return (
    <Background id='contact'
      initial={"offscreen"}
      whileInView={"onscreen"}
      viewport={{once:false, amount:0.8}}
      transition={{staggerChildren: 0.5}}
    >
      <TitleContact
        variants={titleAnimate}
      >ENTRE EM CONTATO AINDA HOJE</TitleContact>
    </Background>
  )
}


export { Contact }

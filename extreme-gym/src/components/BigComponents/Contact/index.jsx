import React from 'react'

import { Background, TitleContact } from './styles'

const titleAnimate={
  offscreen:{
    y: -80,
    opacity: 0
  },

  onscreen:{
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.7,
      duration:1,
    }
  }
}

const Contact = () => {
  return (
    <Background id='contact'
      initial={"offscreen"}
      whileInView={"onscreen"}
      viewport={{once:true, amount:0.8}}
      transition={{staggerChildren: 0.5}}
    >
      <TitleContact
        variants={titleAnimate}
      >ENTRE EM CONTATO AINDA HOJE</TitleContact>
    </Background>
  )
}


export { Contact }

import React from 'react'
import { Button1 } from './styles'

const buttonAnimate={
  offscreen:{
    y: 100,
    opacity: 0
  },

  onscreen:{
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0,
      delay: 0.3,
      duration: 1
    }
  }
}

const Button = ({title}) => {
  return (
    <Button1 
      initial={"offscreen"}
      whileInView={"onscreen"}
      viewport={{once:true, amount:1}}
      variants={buttonAnimate}
    > {title} </Button1>
  )
}


export { Button }
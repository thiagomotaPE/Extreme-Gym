import React from 'react'
import { Card, TitleCard } from './styles'

const cardAnimate={
  offscreen:{
    y: 20,
    opacity: 0
  },

  onscreen:{
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0,
      duration:0.6,
      delay:0.2
    }
  }
}

const CardServices = ({variant, title}) => {
  return (
    <Card variant={variant}
      initial={"offscreen"}
      whileInView={"onscreen"}
      viewport={{once:true, amount:0.6}}
      variants={cardAnimate}
    >
      <TitleCard>{title}</TitleCard>
    </Card>
  )
}

export { CardServices }

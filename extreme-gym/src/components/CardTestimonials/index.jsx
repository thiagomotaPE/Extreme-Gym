import React from 'react'
import { Container, CardDescription, CardPhoto } from './styles'

const cardAnimate={
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
      duration:0.6,
      delay:0.4
    }
  }
}

const CardTestimonials = ({variant, description}) => {
  return (<>
    <Container
      initial={"offscreen"}
      whileInView={"onscreen"}
      viewport={{once:false, amount:0.6}}
      variants={cardAnimate}
    >
      <CardPhoto variant={variant}></CardPhoto>
      <CardDescription>{description}</CardDescription>
    </Container>
    </>
  )
}

export { CardTestimonials }
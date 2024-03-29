import React from 'react'
import { Container, Title, Description } from './styles'
import { motion } from "framer-motion";

const cardAnimate={
  offscreen:{
    x: 20,
    opacity: 0
  },

  onscreen:{
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0,
      duration:0.6
    }
  }
}

const CardContact = ({title, description}) => {
  return (
    <Container>
        <motion.div
          initial={"offscreen"}
          whileInView={"onscreen"}
          viewport={{once:true, amount:0.5}}
          variants={cardAnimate}
        >
          <Title>{title}</Title>
          <Description>{description}</Description>
        </motion.div>
    </Container>
  )
}

export { CardContact }

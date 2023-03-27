import React from 'react'
import { Container, Title, Description } from './styles'
import { motion } from "framer-motion";

const cardAnimate={
  offscreen:{
    x: 100,
    opacity: 0
  },

  onscreen:{
    x: 1,
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
          viewport={{once:false, amount:0.5}}
          variants={cardAnimate}
        >
          <Title>{title}</Title>
          <Description>{description}</Description>
        </motion.div>
    </Container>
  )
}

export { CardContact }

import React from 'react'

import { Background } from './styles'
import { Button } from '../../Button'
import { motion, Variants } from 'framer-motion'


const Apresentation = () => {

  return (
    <Background id='home'>
      <motion.h1
        initial={{x: 100}}
        animate={{x: 0,rotate:360}}
        transition={{
          type: "spring",
          bounce: 0.4
        }}
      >SEJA SEU MELHOR</motion.h1>
      <Button></Button>
    </Background>
  )
}


export { Apresentation }

import React from 'react'

import { Background, TitleServices, SubTitleServices } from './styles'
import { CardServices } from '../../CardServices'

const titleAnimate={
  offscreen:{
    x: 40,
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

const subtitleAnimate={
  offscreen:{
    y: 50,
    opacity: 0
  },

  onscreen:{
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0,
      duration:1,
      delay:0.4
    }
  }
}

const Services = () => {
  return (
    <Background id='services'
      initial={"offscreen"}
      whileInView={"onscreen"}
      viewport={{once:true, amount:0.3}}
      transition={{staggerChildren: 0.5}}
    >
      <TitleServices
        variants={titleAnimate}
      >O QUE OFERECEMOS</TitleServices>
      <SubTitleServices
        variants={subtitleAnimate}
      >
        Estamos empenhados em trazer a melhor experiência e treino
      </SubTitleServices>
      <div>
        <CardServices variant="service1" title="TOUR PELA ACADEMIA"></CardServices>
        <CardServices variant="service2" title="AULAS EM GRUPO"></CardServices>
        <CardServices variant="service3" title="PERSONAL TRAINNERS"></CardServices>
      </div>
    </Background>
  )
}


export { Services }

import React from 'react'

import { Background, TitleTestimonials } from './styles'
import { CardTestimonials } from '../../CardTestimonials'

const titleAnimate={
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

const Testimonials = () => {
  return (
    <Background id='testimonials'
      initial={"offscreen"}
      whileInView={"onscreen"}
      viewport={{once:false, amount:0.5}}
      transition={{staggerChildren: 0.5}}
    >
      <TitleTestimonials
        variants={titleAnimate}
      >ANTES E DEPOIS</TitleTestimonials>
      <div className='cardsContainer'>
        <div className='cards'>
          <CardTestimonials variant="testimonials1" description="Depoimentos são citações curtas de clientes. É uma otima forma de convencer novos clientes a experimentar seus serviços.Tomas Costas, 32"/>
        </div>
        <div className='cards'>
          <CardTestimonials variant="testimonials2" description="Depoimentos são citações curtas de clientes. É uma otima forma de convencer novos clientes a experimentar seus serviços. Alice Vieira, 41"/>
        </div>
        <div className='cards'>
          <CardTestimonials variant="testimonials3" description="Depoimentos são citações curtas de clientes. É uma otima forma de convencer novos clientes a experimentar seus serviços. Isaac David, 24"/>
        </div>
      </div>
    </Background>
  )
}


export { Testimonials }

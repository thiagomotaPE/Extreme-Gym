import React from 'react'

import { Background, TitleTestimonials } from './styles'
import { CardTestimonials } from '../../CardTestimonials'

const Testimonials = () => {
  return (
    <Background>
      <TitleTestimonials>ANTES E DEPOIS</TitleTestimonials>
      <div className='cardsContainer'>
        <div class='cards'>
          <CardTestimonials variant="testimonials1" description="Depoimentos são citações curtas de clientes. É uma otima forma de convencer novos clientes a experimentar seus serviços.Tomas Costas, 32"/>
        </div>
        <div class='cards'>
          <CardTestimonials variant="testimonials2" description="Depoimentos são citações curtas de clientes. É uma otima forma de convencer novos clientes a experimentar seus serviços. Alice Vieira, 41"/>
        </div>
        <div class='cards'>
          <CardTestimonials variant="testimonials3" description="Depoimentos são citações curtas de clientes. É uma otima forma de convencer novos clientes a experimentar seus serviços. Isaac David, 24"/>
        </div>
      </div>
    </Background>
  )
}


export { Testimonials }

import React from 'react'

import { Background, TitleTestimonials } from './styles'
import { CardTestimonials } from '../../CardTestimonials'

const Testimonials = () => {
  return (
    <Background>
      <TitleTestimonials>ANTES E DEPOIS</TitleTestimonials>
      <div className='cardsContainer'>
        <div class='cards'>
          <CardTestimonials></CardTestimonials>
        </div>
        <div class='cards'>
          <CardTestimonials></CardTestimonials>
        </div>
        <div class='cards'>
          <CardTestimonials></CardTestimonials>
        </div>
      </div>
    </Background>
  )
}


export { Testimonials }

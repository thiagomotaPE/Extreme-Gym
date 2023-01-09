import React from 'react'

import { Background, TitleTestimonials } from './styles'
import { CardTestimonials } from '../../CardTestimonials'

const Testimonials = () => {
  return (
    <Background>
      <TitleTestimonials>ANTES E DEPOIS</TitleTestimonials>
      <div>
        <CardTestimonials></CardTestimonials>
        <CardTestimonials></CardTestimonials>
        <CardTestimonials></CardTestimonials>
      </div>
    </Background>
  )
}


export { Testimonials }

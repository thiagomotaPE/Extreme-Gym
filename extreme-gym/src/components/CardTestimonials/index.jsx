import React from 'react'
import { Container, CardDescription, CardPhoto } from './styles'

const CardTestimonials = ({variant, description}) => {
  return (<>
    <Container>
      <CardPhoto variant={variant}></CardPhoto>
      <CardDescription>{description}</CardDescription>
    </Container>
    </>
  )
}

export { CardTestimonials }
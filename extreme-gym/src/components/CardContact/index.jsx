import React from 'react'
import { Container, Title, Description } from './styles'

const CardContact = ({title, description}) => {
  return (
    <Container>
        <Title>{title}</Title>
        <Description>{description}</Description>
    </Container>
  )
}

export { CardContact }

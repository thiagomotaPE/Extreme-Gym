import React from 'react'
import { Card, TitleCard } from './styles'

const CardServices = ({variant, title}) => {
  return (
    <Card variant={variant}>
      <TitleCard>{title}</TitleCard>
    </Card>
  )
}

export { CardServices }

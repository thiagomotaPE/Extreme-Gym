import React from 'react'

import { Background } from './styles'
import { CardContact  } from '../../CardContact'

const Footer = () => {
  return (
    <Background>
      <CardContact />
      <CardContact />
      <CardContact />
    </Background>
  )
}


export { Footer }

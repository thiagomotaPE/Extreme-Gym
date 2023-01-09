import React from 'react'

import { Background } from './styles'
import { CardContact  } from '../../CardContact'

const Footer = () => {
  return (
    <Background>
      <div className='infos'>
        <CardContact />
        <CardContact />
        <CardContact />
      </div>
    </Background>
  )
}


export { Footer }

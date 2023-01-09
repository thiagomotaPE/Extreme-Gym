import React from 'react'

import { Background, TitleServices, SubTitleServices } from './styles'
import { CardServices } from '../../CardServices'

const Services = () => {
  return (
    <Background>
      <TitleServices>O QUE OFERECEMOS</TitleServices>
      <SubTitleServices>
        Estamos empenhados em trazer a melhor experiência e treino
      </SubTitleServices>
      <div>
        <CardServices></CardServices>
        <CardServices></CardServices>
        <CardServices></CardServices>
      </div>
    </Background>
  )
}


export { Services }

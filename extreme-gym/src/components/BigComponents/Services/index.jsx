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
        <CardServices variant="service1" title="TOUR PELA ACADEMIA"></CardServices>
        <CardServices variant="service2" title="AULAS EM GRUPO"></CardServices>
        <CardServices variant="service3" title="PERSONAL TRAINNERS"></CardServices>
      </div>
    </Background>
  )
}


export { Services }

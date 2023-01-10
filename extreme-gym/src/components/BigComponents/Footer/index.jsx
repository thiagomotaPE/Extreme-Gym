import React from 'react'

import { Background } from './styles'
import { CardContact  } from '../../CardContact'

const Footer = () => {
  return (
    <Background>
      <div className='infos'>
        <CardContact title="ENDEREÇO" description="R.Clarana, 44 - JSP"/>
        <CardContact title="E-MAIL" description="thiagomotape@hotmail.com.br" />
        <CardContact title="TELEFONE" description="(81) 9 8556-2063"/>
      </div>
    </Background>
  )
}


export { Footer }

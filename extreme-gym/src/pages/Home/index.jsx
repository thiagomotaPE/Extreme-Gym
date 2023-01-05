import React from 'react'
import { HomeContainer } from './styles';

import { Header } from '../../components/BigComponents/Header';
import { Apresentation } from '../../components/BigComponents/Apresentation';
import { About } from '../../components/BigComponents/About';
import { Services } from '../../components/BigComponents/Services';
import { Testimonials } from '../../components/BigComponents/Testimonials';
import { Contact } from '../../components/BigComponents/Contact';

const Home = () => {
  return (<>
    <HomeContainer>
        <Header />
        <Apresentation />
        <About />
        <Services />
        <Testimonials />
        <Contact />
    </HomeContainer>
    </>
  )
}

export { Home }
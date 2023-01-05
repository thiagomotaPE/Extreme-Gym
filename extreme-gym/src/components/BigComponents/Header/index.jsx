import React from 'react'
import { Container, Logo, Navigation, Links, BurguerMenu } from './styles';

const Header = () => {
  return (
    <Container>
        <Logo>Extreme</Logo>
        <Navigation>
            <Links href='#'>Home</Links>
            <Links href='#'>About</Links>
            <Links href='#'>Services</Links>
            <Links href='#'>Testimonials</Links>
            <Links href='#'>Contact</Links>
            <BurguerMenu>MENU</BurguerMenu>
        </Navigation>
    </Container>
  )
}

export { Header }

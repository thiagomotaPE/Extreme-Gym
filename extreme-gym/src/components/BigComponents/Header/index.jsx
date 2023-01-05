import React from 'react'
import { Container, Logo, Navigation, Links, BurguerMenu } from './styles';

const Header = () => {
  return (<>

    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />

    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />

    <Container>
        <Logo>
          <span class="material-symbols-outlined">
            fitness_center
          </span>Extreme
        </Logo>
        <Navigation>
            <Links href='#'>Home</Links>
            <Links href='#'>About</Links>
            <Links href='#'>Services</Links>
            <Links href='#'>Testimonials</Links>
            <Links href='#'>Contact</Links>
            <BurguerMenu>
              <span class="material-symbols-outlined">menu</span>
            </BurguerMenu>
        </Navigation>
    </Container>
    </>
  )
}

export { Header }

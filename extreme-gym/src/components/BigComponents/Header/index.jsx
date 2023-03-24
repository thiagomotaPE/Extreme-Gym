import React from 'react'
import { Container, Logo, Navigation, Links, BurguerMenu } from './styles';

const Header = ({onClick}) => {

  const clickMenu = () => {
    const nav = document.getElementById('nav');
    if(nav.style.display === "none"){
      nav.style.display = "flex";
    }else{
      nav.style.display = "none";
    }
  }
  
  return (<>

    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />

    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />

    <Container>
        <Logo>
          <span className="material-symbols-outlined">
            fitness_center
          </span>Extreme
        </Logo>
        <Navigation id='nav'>
            <Links href='#home'>Home</Links>
            <Links href='#about'>About</Links>
            <Links href='#services'>Services</Links>
            <Links href='#testimonials'>Testimonials</Links>
            <Links href='#contact'>Contact</Links>
        </Navigation>
        <BurguerMenu onClick={clickMenu}>
            <span className="material-symbols-outlined">menu</span>
        </BurguerMenu>
    </Container>
    </>
  )
}

export { Header }

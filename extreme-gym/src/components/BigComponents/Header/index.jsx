import React from 'react'
import { Container, Logo, Navigation, Links, BurguerMenu } from './styles';

const Header = ({onClick}) => {

  const clickMenu = () => {
    const nav = document.getElementById('nav');
    const menuIcon = document.getElementById('menuIcon');
    if(nav.style.display === "none"){
      nav.style.display = "flex";
      menuIcon.innerHTML = "Close";
    }else{
      nav.style.display = "none";
      menuIcon.innerHTML = "Menu";
    }
  }
  
  return (<>

    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />

    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />

    <Container id='nav'>
        <Logo>
          <span className="material-symbols-outlined">
            fitness_center
          </span>Extreme
        </Logo>
        <Navigation>
            <Links href='#home' onClick={clickMenu}>Home</Links>
            <Links href='#about'onClick={clickMenu}>About</Links>
            <Links href='#services' onClick={clickMenu}>Services</Links>
            <Links href='#testimonials' onClick={clickMenu}>Testimonials</Links>
            <Links href='#contact' onClick={clickMenu}>Contact</Links>
        </Navigation>
        
    </Container>
    <BurguerMenu onClick={clickMenu}>
        <span className="material-symbols-outlined" id='menuIcon'>Menu</span>
    </BurguerMenu>
    </>
  )
}

export { Header }

import React from 'react'
import { Container, Logo, Navigation, Links, BurguerMenu } from './styles';

const Header = ({onClick}) => {

  const clickMenu = () => {
    const nav = document.getElementById('nav');
    const menuIcon = document.getElementById('menuIcon');
    if(nav.style.right === "-191px"){
      nav.style.right = "-16px";
      menuIcon.innerHTML = "Close";
    }else{
      nav.style.right = "-191px";
      menuIcon.innerHTML = "Menu";
    }
  }
  const clickNav = () => {
    const nav = document.getElementById('nav');
    const menuIcon = document.getElementById('menuIcon');
    if(nav.style.right === "-16px"){
      nav.style.right = "-191px";
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
            <Links href='#home' onClick={clickNav}>Home</Links>
            <Links href='#about'onClick={clickNav}>About</Links>
            <Links href='#services' onClick={clickNav}>Services</Links>
            <Links href='#testimonials' onClick={clickNav}>Testimonials</Links>
            <Links href='#contact' onClick={clickNav}>Contact</Links>
        </Navigation>
        
    </Container>
    <BurguerMenu onClick={clickMenu}>
        <span className="material-symbols-outlined" id='menuIcon'>Menu</span>
    </BurguerMenu>
    </>
  )
}

export { Header }

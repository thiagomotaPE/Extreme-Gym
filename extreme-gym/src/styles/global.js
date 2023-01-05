import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
  }
  
  body {
    background-color: black;
    color: #FFFFFF;

    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 50vh 50vh 50vh 50vh 50vh;
    grid-template-areas: "home"
                         "about"
                         "services"
                         "testimonials"
                         "contact";


  }

`
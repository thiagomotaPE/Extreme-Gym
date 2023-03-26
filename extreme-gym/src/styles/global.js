import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    scroll-behavior: smooth;
    scroll-padding-top: 70px;

    @media (max-width: 600px){
      scroll-padding-top: 0px;  
    }
  }
  
  body {
    background-color: black;
    color: #FFFFFF;
  }

  ::-webkit-scrollbar{
    background-color: #141414;
    width: 10px;
  }
  ::-webkit-scrollbar-thumb{
    background-color: #eaef23;
    height: 138px;
    border-radius: 100px;
  }

`

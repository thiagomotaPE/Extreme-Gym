import styled from "styled-components";
import BackgroundImg from '../../../assets/img/backgroundContact1.jpg'

export const Background = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    background-color: #141414;
    background-image: url(${BackgroundImg});
    background-position: bottom center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    height: 55vh;
    @media (min-width: 800px){
        height: 80vh;
    }

`

export const TitleContact = styled.h1`
    font-family: 'Anton';
    font-style: italic;
    font-size: 4rem;
    color: #eaef23;
    padding: 10px;
    @media (min-width: 800px){
        margin-left: 15px;
        width: 300px;
    }
`
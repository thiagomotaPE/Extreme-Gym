import styled from "styled-components";
import BackgroundImg from '../../../assets/img/background1.jpg'


export const Background = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;

    background-color: #000;
    background-image: url(${BackgroundImg});
    background-position: top center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    height: 100vh;
`
export const Slogan = styled.h1`
    font-family: 'Anton';
    font-style: italic;
    font-size: 8rem;
    @media(max-width: 600px){
        font-size: 4rem;
    }
`
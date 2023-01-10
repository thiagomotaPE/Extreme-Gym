import styled, { css } from "styled-components";
import Service1 from '../../assets/img/servicos1.jpg'
import Service2 from '../../assets/img/servicos2.jpg'
import Service3 from '../../assets/img/servicos3.jpg'

export const Card = styled.div`
    background-color: #eaef23;
    width: 200px;
    height: 40vh;
    border: 2px solid #eaef23;

    ${({variant}) => variant === "service1" && css`
        background-image: url(${Service1});
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
        background-attachment: scroll;
    ` }
    ${({variant}) => variant === "service2" && css`
        background-image: url(${Service2});
        background-position: center right;
        background-repeat: no-repeat;
        background-size: cover;
        background-attachment: scroll;
    ` }
    ${({variant}) => variant === "service3" && css`
        background-image: url(${Service3});
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
        background-attachment: scroll;
    ` }

    @media (min-width: 800px){
        width: 300px;
        height: 60vh;
    }
`
export const TitleCard = styled.h3`
    font-family: 'Anton';
    font-style: italic;
    font-size: 2rem;

    position: relative;
    top: 50%;
    left: 50%;

    transform: translate(-50%, -50%);

    text-align: center;

    @media (min-width: 800px){
        display: flex;
        flex-direction: column;
        justify-content: center;
        font-size: 3rem;
    }
`
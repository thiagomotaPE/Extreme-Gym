import styled from "styled-components";

export const Background = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #141414;
    height: 190vh;
    @media (min-width: 800px){
        height: 100vh;
    }

    div.cardsContainer{
        @media (min-width: 800px){
            display: flex;
            flex-direction: row;
        }
    }

    div.cards{
        @media (min-width: 800px){
            margin: 15px;
        }
    }
`
export const TitleTestimonials = styled.h2`
    font-family: 'Anton';
    font-style: italic;
    font-size: 2.5rem;
    color: #eaef23;
    margin-top: 25px;
    margin-bottom: 15px;
    @media (min-width: 800px){
        font-size: 5rem;
    }
`
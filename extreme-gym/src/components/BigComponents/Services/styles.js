import styled from "styled-components";

export const Background = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 30px;
    background-color: #141414;
    height: 160vh;
    @media (min-width: 800px){
        height: 100vh;
    }
    
    div{
        margin-top: 15px;
        @media (min-width: 800px){
            display: flex;
            flex-direction: row;
            margin: 15px;
        }
    }
`
export const TitleServices = styled.h2`
    font-family: 'Anton';
    font-style: italic;
    font-size: 2.5rem;
    color: #eaef23;
    @media (min-width: 800px){
        font-size: 5rem;
    }
`
export const SubTitleServices = styled.h3`
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
    font-size: 1rem;
    text-align: center;
    @media (min-width: 800px){
        font-size: 1.4rem;
    }
`
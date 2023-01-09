import styled from "styled-components";

export const Background = styled.div`
    background-color: #eaef23;
    height: 50vh;
    @media (min-width: 800px){
        height: 20vh;
    }

    div.infos{
        @media (min-width: 800px){
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            padding-top: 10px;
            
        }
    }

`
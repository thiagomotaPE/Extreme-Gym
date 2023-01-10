import styled from "styled-components";

export const Container = styled.header`
    background-color: #141414;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    padding: 15px;
    border-bottom: solid 1px #eaef23;
`
export const Logo = styled.h1`
    font-size: 2em;
    font-family: 'Anton';
    font-style: italic;

    span{
        color: #eaef23;
    }
`
export const Navigation = styled.nav`

`
export const Links = styled.a`
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
    display: none;
    color: #fff;
    text-decoration: none;
    margin-left: 20px;
    padding: 3px;

    position: relative;

    ::after{
        content: " ";
        background-color: #eaef23;
        width: 0%;
        height: 4px;

        position: absolute;
        bottom: 0;
        left: 0;

        transition: 0.3s ease-in-out;
    }

    :hover::after{
        width: 100%;
    }

    @media (min-width: 600px){
        display: initial;
    }

`
export const BurguerMenu = styled.button`
    color: #000;
    padding: 8px;
    background-color: #eaef23;
    border: none;
    border-radius: 3px;
    align-items: center;

    @media (min-width: 600px){
        display: none;
    }
`
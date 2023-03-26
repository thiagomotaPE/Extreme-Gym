import styled from "styled-components";

export const Container = styled.header`
    background-color: #141414;
    
    padding: 8px;
    position: fixed;
    z-index: 100;
    top: 0;
    right: -191px;
    height: 100vh;

    transition: right .8s;
    
    @media (min-width: 600px){
        position: fixed;
        width: 100%;
        z-index: 100;
        top: 0;
        right: initial;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        padding: 15px;
        align-items: center;
        border-bottom: solid 1px #eaef23;
        height: 12vh;
        
    }
`
export const Logo = styled.h1`
    display: none;
    span{
        color: #eaef23;
    }
    @media (min-width: 600px){
        display: initial;
        font-size: 2em;
        font-family: 'Anton';
        font-style: italic;
    }
`
export const Navigation = styled.nav`
    display: flex;
    flex-direction: column;
    @media (min-width: 600px){
        display: flex;
        flex-direction: row;
    }
`
export const Links = styled.a`
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
    color: #fff;
    text-decoration: none;
    margin: 40px;
    position: relative;
    
    ::after{
        content: " ";
        background-color: #eaef23;
        width: 0%;  
        height: 4px;

        position: absolute;
        bottom: 0;
        left: 0;

        transition: 0.4s ease-in-out;
    }

    :hover::after{
        width: 100%;
    }

    @media (min-width: 600px){
        display: initial;
        padding: 3px;
        margin-left: 20px;
    }

`
export const BurguerMenu = styled.button`
    color: #000;
    padding: 8px;
    background-color: #eaef23;
    border: none;
    border-radius: 3px;
    align-items: center;
    cursor: pointer;
    z-index: 100;
    top: 0;

    @media (min-width: 600px){
        display: none;
    }
    @media (max-width: 600px){
        position: fixed;
        top: 85vh;
        right: 55px;
        margin-left: 40vh;
        border-radius: 50%;
        padding: 15px;
        box-shadow: -5px 1px 5px #00000070;
    }
`
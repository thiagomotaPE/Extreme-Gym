import styled from "styled-components";

export const Container = styled.header`
    font-family: arial;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    padding: 15px;
    border-bottom: solid 1px white;
`
export const Logo = styled.h1`
    font-size: 1.5em;
`
export const Navigation = styled.nav`
    

`
export const Links = styled.a`
    display: none;
    color: #fff;
    text-decoration: none;
    margin-left: 20px;

    @media (min-width: 600px){
        display: initial;
    }

`
export const BurguerMenu = styled.a`
    color: #fff;

    @media (min-width: 600px){
        display: none;
    }
`
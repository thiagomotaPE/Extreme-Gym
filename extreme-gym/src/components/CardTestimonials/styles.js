import { motion } from "framer-motion";
import styled, { css } from "styled-components";
import Testimonials1 from '../../assets/img/testimonials1.jpg'
import Testimonials2 from '../../assets/img/testimonials2.jpg'
import Testimonials3 from '../../assets/img/testimonials3.jpg'

export const Container = styled(motion.div)`
    
`

export const CardPhoto = styled.div`
    border: 1px solid #eaef23; 
    width:200px;
    height: 35vh;

    ${({variant}) => variant === "testimonials1" && css`
        background-image: url(${Testimonials1});
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
        background-attachment: scroll;
    ` }
    ${({variant}) => variant === "testimonials2" && css`
        background-image: url(${Testimonials2});
        background-position: center right;
        background-repeat: no-repeat;
        background-size: cover;
        background-attachment: scroll;
    ` }
    ${({variant}) => variant === "testimonials3" && css`
        background-image: url(${Testimonials3});
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
        background-attachment: scroll;
    ` }
    @media (min-width: 800px){
        width: 300px;
        height: 40vh;
    }
`

export const CardDescription = styled(motion.div)`
    background-color: #eaef23;
    width: 200px;
    height: 20vh;
    margin-bottom: 15px;

    font-family: 'Poppins', sans-serif;
    font-size: 0.8rem;
    font-weight: bold;
    color: #000;
    padding: 10px;

    @media (min-width: 800px){
        width: 300px;
        height: 20vh;
    }
`
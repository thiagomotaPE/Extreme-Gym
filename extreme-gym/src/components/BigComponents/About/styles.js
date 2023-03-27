import styled from "styled-components";
import AboutImg1 from '../../../assets/img/sobreNos1.jpg'
import AboutImg2 from '../../../assets/img/sobreNos2.jpg'
import { motion } from "framer-motion";

export const Background = styled(motion.div)`
    background-color: #141414;
    height: 130vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (min-width: 800px){
        height: 110vh;
        flex-direction: row;
        justify-content: space-around;
        align-items: initial;
    }
`
export const Description = styled(motion.div)`
    margin: 20px;
`
export const TitleDescription = styled(motion.h2)`
    font-size: 3em;
    font-family: 'Anton';
    font-style: italic;
    color: #eaef23;
    @media (min-width: 800px){
        font-size: 6rem;
    }
`

export const ResumeDescription = styled(motion.p)`
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
    width: 310px;
    text-align: center;
    @media (min-width: 800px){
        text-align: initial;
        font-size: 1.5rem;
        width: 600px;
    }
`
export const Img1 = styled(motion.div)`
    background-color: yellow;
    background-image: url(${AboutImg1});
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: scroll;
    width: 300px;
    height: 500px;
    margin-bottom: 15px;
    border: 2px solid #eaef23;
    @media (min-width: 800px){
        top: 50%;
        left: 50%;
        transform: translate(-65%, 25%);
    }

`
export const Img2 = styled(motion.div)`
    background-color: yellow;
    background-image: url(${AboutImg2});
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: scroll;
    width: 300px;
    height: 500px;
    margin-bottom: 25px;
    border: 2px solid #eaef23;
    @media (min-width: 800px){
        top: 50%;
        left: 50%;
        transform: translate(-50%, 10%);
    }
`
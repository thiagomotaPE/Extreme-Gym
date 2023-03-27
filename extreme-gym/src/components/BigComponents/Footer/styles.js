import { motion } from "framer-motion";
import styled from "styled-components";

export const Background = styled(motion.div)`
    background-color: #eaef23;
    height: 55vh;
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
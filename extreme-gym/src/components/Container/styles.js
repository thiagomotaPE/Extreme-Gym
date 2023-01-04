import styled from 'styled-components';

export const container = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 50vh 50vh 50vh 50vh 50vh;
    grid-template-areas: "home"
                         "about"
                         "services"
                         "testimonials"
                         "contact";


`
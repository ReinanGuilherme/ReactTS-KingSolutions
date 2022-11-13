import styled from "styled-components";

export const Container = styled.div`

    padding: 40px 20px;

    background-color: var(--greyBackground);

    h2 {
        font-size: 25px;
        margin-bottom: 15px;
    }

    @media (min-width: 800px){
        padding: 40px 70px;

        h2 {
            font-size: 30px;
        }

        p {
            font-size: 18px;
        }
    }

`
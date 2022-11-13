import styled from "styled-components";

export const Container = styled.div`

    padding: 40px 20px;

    text-align: center;

    h2 {
        font-size: 25px;
        margin-bottom: 40px;
    }

    img {
        text-align: center;
        width: 300px;
    }

    @media (min-width: 800px) {

        padding: 40px 70px;

        h2 {
            font-size: 30px;
        }
    }
`

export const ContainerSection = styled.section `

    text-align: center;

    h3 {
        margin-bottom: 20px;
        text-align: left;
    }

    p {
        margin-bottom: 10px;
        text-align: left;
    }

    @media (min-width: 800px) {



        display: flex;
        justify-content: center;
        align-items: center;

        gap: 40px;

        div {

            width: 500px;

            h3 {
            font-size: 22px;
            }

            p {
                font-size: 18px;
            }
        }

        
    }

    @media (min-width: 1000px) {

        div {            
            margin-right: 120px;
        }

        img {
            width: 400px;
        }
    }

`
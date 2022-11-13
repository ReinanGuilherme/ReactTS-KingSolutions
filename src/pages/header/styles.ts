import styled from "styled-components";

import bg from "../../assets/imgHeader/background.jpg"

export const Container = styled.header`

    height: 100vh;
    padding: 20px;

    background-image: url(${bg});
    background-position: right;
    background-size: cover;

    color: #fff;

    display: flex;
    justify-content: center;
    align-items: center;

    position: relative;

    .logoKing {
        position: absolute;
        top: 20px;
        left: 20px;

        width: 150px;
    }

    div {
        text-align: center;

        h1 {
            font-size: 50px;
            margin-bottom: 20px;
        }

        p {
            font-size: 20px;
        }
    }

    @media (min-width: 800px){

        .logoKing {
            width: 250px;
        }

        div {

            width: 750px;

            h1 {
                font-size: 80px;
            }

            p {
                font-size: 30px;
            }
        }
    }

`
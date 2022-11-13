import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

    :root {
        --greyBackground: #edf1f6;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html {
        scroll-behavior: smooth;
    }
    body {        
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    }
    a {
        text-decoration: none;
    }
    ul li {
        list-style: none;
    }
    button {        
        cursor: pointer;
        border: none;
    }
    button, input, textarea {
        outline: none;
    }

`
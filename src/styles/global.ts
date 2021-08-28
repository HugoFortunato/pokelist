import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
      :root {
        --red: #E52E4D;
        --black: #1a1c1d;
        --green: #33CC95;

        --blue-light: #6933FF;

        --text-title: #36C895;
        --text-body: #33CC3d;

        --background: #343536;
        --shape: #FFFFFF;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        @media (max-width: 1080px) {
            font-size: 93.75%;
        }

        @media (max-width: 750px) {
            font-size: 87.5%;
        }
    }

    body, input, textarea, button {
        font-family: 'Press Start 2P', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }

    body {overlayClassName
    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }
}`





// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styled, { createGlobalStyle } from 'styled-components'
import backgroundImage from './images/brett-jordan.jpg'

export const BaseStyle = createGlobalStyle`
    html { 
        height: 100%; 
    }

    body {
        background-image: url(${backgroundImage});
        background-size: cover;
        margin: 0;
        padding: 0 20px;
        display: flex;
        justify-content: center;
    }

    * {
        box-sizing: border-box;
        font-family: sans-serif;
    }

` 

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    .score {
        color: #463828;
        font-size: 2rem;
        margin: 0;
    }

    h1 {
        font-family: Boogaloo;
        background-image: linear-gradient(180deg, #f5f2b8, #944b16);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        -moz-background-clip: text;
        -moz-text-fill-color: transparent;
        filter: drop-shadow(2px 2px #463828);
        font-size: 70px;
        text-align: center;
        margin: 20px;
    }

    .start, .next {
        cursor: pointer;
        background: linear-gradient(180deg, #fff, #d4984e);
        border: 2px solid #bf6e0a;
        box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
        border-radius: 10px;
        height: 40px;
        margin: 20px 0;
        padding: 0 40px;
    }

    .start {
        max-width: 200px;
    }

    footer { 
        margin-top: 100px;
        color: #463828;
        font-size: .8rem;

        a {
            color: #ffbe82;
            font-weight: bold;
        }
    }
`


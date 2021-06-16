
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
        font-family: 'Catamaran', sans-serif;
    }

` 

//TODO write wrapper


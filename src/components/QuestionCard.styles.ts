import styled from "styled-components";

export const Wrapper = styled.div`
    max-width: 1100px;
    background: #fadea7;
    border-radius: 10px;
    border: 2px solid #463828;
    padding: 20px;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    text-align: center;

    p {
        font-size: 1rem;
        color: #463828;
        font-weight: bold;
    }
`

type ButtonWrapperProps = {
    correct: boolean;
    userClicked: boolean;
}

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
    transition: all 0.3s ease;

    :hover {
        opacity: 0.6;
    }

    button {
        cursor: pointer;
        user-select: none;
        font-size: 0.8rem;
        width: 100%;
        height: 40px;
        margin: 5px 0;
        background: ${({correct, userClicked}) => 
            correct 
            ? 'linear-gradient(90deg,#56e7ff,#598ebc)' 
            : !correct && userClicked
            ? 'linear-gradient(90deg, #a67e5d, #915a2d)'
            : 'linear-gradient(90deg, #e8ca90, #ffbe82)'
        };
        border: 3px solid #fff;
        box-shadow 1px 2px 0px rgba(0, 0, 0, 0.1);
        border-radius: 10px;
        color: #463828;
    }
`
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *,
    *::after,
    *::before{
        margin: 0;
        padding: 0;
        box-sizing: inherit;
    }

    html{
        font-size: 100%;  
    }
    body {
        margin: 0;
        font-family: 'Exo 2', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        box-sizing: border-box;
        font-weight: 400;
        line-height: 1.7;
        color: ${({ theme }) => theme.color.dark};
    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
    }

    h1,h2,h3,h4, h5{
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
    }

    button,
    button:focus,
    button:active,
    button:hover {
        cursor: pointer;
        box-shadow: none;
        outline: none;
        border: transparent;
    }

    form {
        width: 100%;
    }
    input, textarea {
        display: block;
        border: ${({ theme }) => theme.border.sm};
        width: 100%;
        box-shadow: none;
        padding: 0.6rem 1rem;
        margin-bottom: 1rem;
        border-radius: 0.3rem;
        color: ${({ theme }) => theme.color.dark};
        font-size: 1rem;
        outline: none;
        &:focus,
        &:active,
        &:hover {
            box-shadow: none;
            border: ${({ theme }) => theme.border.sm};
            outline: none;
        }
    }

    a{
        cursor: pointer;
        color: ${({ theme }) => theme.color.primary.main};
        &:focus {
            outline: none;
        }
    }

`;

export default GlobalStyle;

import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
body {
    margin: 0px;
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: 1rem;
    line-height: 1.5rem;
    text-rendering: optimizeLegibility;
    letter-spacing: 0.5px;
    background: ${({ theme }) => theme.color.primary};
    color: ${({ theme }) => theme.color.font};
    -webkit-font-smoothing: antialiased;
    align-items: center;
    margin: auto;
    max-width: ${({ theme }) => theme.dimensions.maxWidthDesktop};

    main {
        padding: 0px 25px;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        text-transform: uppercase;
        text-decoration: none;
        color: ${({ theme }) => theme.color.font};

        a {
            text-decoration: none;
            color: ${({ theme }) => theme.color.font};
        }
    }

        h1 {
        font-weight: 700;
        font-size: 2rem;
        line-height: 2.375rem;
    }

    h2 {
        font-weight: 700;
        font-size: 1.25rem;
        line-height: 1.5rem;
    }

    h3 {
        font-weight: 700;
        font-size: 1.25rem;
        line-height: 2.25rem;
        letter-spacing: 1px;
        text-transform: uppercase;
    }

    h4 {
        font-size: 1rem;
        line-height: 1.5rem;
        font-weight: 400;
    }
}
`;

export default GlobalStyles;

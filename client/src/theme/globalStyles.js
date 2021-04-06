import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
html {
    height: 100%;
    background-color: ${(props) => props.theme.palette.white};
    /* width: 1200px; */
    margin: auto;
    /* display: flex; */
    /* flex-direction: row; */
    flex-wrap: wrap;
    justify-content: center;
    align-items: stretch;
    align-content: center;
}

* {
    padding: 0;
    margin: 0;
}
`;

export default GlobalStyle;

import { createGlobalStyle } from "styled-components";



export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
}
html,
body {
    height: 100%;
}

#root{
    display: flex;
    flex-direction: column;
    height: 100%;
}

`
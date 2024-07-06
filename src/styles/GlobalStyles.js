import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

html{
    scroll-behavior: smooth;
}
    body{
        margin: 0;
        padding: 0;
        background-color: #131415;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        color: white;
        overflow-x: hidden;
    }
    a{
        text-decoration: none;
        color: white;
    }
    li{
        list-style: none;
    }
`;

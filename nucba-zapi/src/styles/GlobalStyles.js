import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        transition:  all 0.3s;
    }
    
    body{
        font-family: "Montserrat", sans-serif;
        margin: 0;
        height: 100vh;
        background-color: #FAFAFA;
    }
    
    a {
        text-decoration: none;
    }
    
    `
import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";
import { stackColor } from "./colors";

export const GlobalStyle = createGlobalStyle`
${reset}

html{
        font-size: 16px;
    }
    *{
        color: ${stackColor.white};
    }
    body{
        background: #060604;
        overflow:hidden;
        height: 100vh;
        font-family: "Roboto", sans-serif;
    }
    a, p {
        color: ${stackColor.white};
        font-size: 1rem;
        text-decoration: none;
    }
`;

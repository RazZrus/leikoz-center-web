import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    body, html {
        margin: 0;
        padding: 0;
        font-family: "Inter";
        font-weight: 700;
        scroll-padding-top: 70px;
        scroll-behavior: smooth;
    }

    @media (min-width: 768px) {
        body, html {
            scroll-padding-top: 90px;
        }
    }

    @media (min-width: 1200px) {
        body, html {
            scroll-padding-top: 110px;
        }
    }
    
    * {
        margin: 0;
        padding: 0;
    }
`
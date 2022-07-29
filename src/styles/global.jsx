import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        font-family: 'Poppins', sans-serif;
        background-color: #D3D3D3;
    }
`;

export default GlobalStyle;
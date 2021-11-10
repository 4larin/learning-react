import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
@import '~antd/dist/antd.css';
    body{
        margin: 0;
        padding: 0;
        font-family: 'Poppins', sans-serif;
    }
`

export default GlobalStyle
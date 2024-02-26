import { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`
 body{
    background: ${({theme}) => theme.body};
    color: ${({theme}) => theme.text};
    transparent: all 0.50s linear;
 }
 p {
   color: ${({theme}) => theme.text};
 }
`
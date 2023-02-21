import styled, { createGlobalStyle } from "styled-components";
import { color, device } from "./utils/styleConstants";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
    }
    body {
        height: 100vh;
        width: 100vw;
        background-color: ${color.black};
        overflow-x: hidden;
        &::-webkit-scrollbar {
            cursor: pointer;
            width: 4px;
            height: 4px;
        }
        &::-webkit-scrollbar-track {
            border-radius: 10px;
            background: ${color.red};
        }
        &::-webkit-scrollbar-thumb{
            border-radius: 10px;
            background: ${color.blue};
        }
        &::-webkit-scrollbar-thumb:hover{F
            background: ${color.black};
        }
        &::-webkit-scrollbar-thumb:active{
            background: #484848;
        }
    }
`
export const Wrapper = styled.div`
    display: grid;
    grid-template: 50px 1fr 50px / 1fr 3fr 1fr;
    height: 100vh;
    width: 100vw;
`
export const HeaderStyle = styled.header`
    grid-column: 1 / span 3;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 20px;
    background-color: ${color.black};
    color: ${color.white};
    font-size: 1.5rem;
    font-weight: bold;
`
export const FooterStyle = styled.footer`
    grid-column: 1 / span 3;
    grid-row: 3;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 20px;
    background-color: ${color.black};
    color: ${color.white};
    font-size: 1.5rem;
    font-weight: bold;
`
export const MainStyle = styled.main`
    grid-column: 2;
    grid-row: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 20px;
    background-color: ${color.black};
    color: ${color.white};
    font-size: 1.5rem;
    font-weight: bold;
`
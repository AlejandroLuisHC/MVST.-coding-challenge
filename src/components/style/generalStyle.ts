import styled, { createGlobalStyle } from "styled-components";
import { color, device } from "./utils/styleConstants";
import { Link } from "react-router-dom";

// Global Style
export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'roboto', sans-serif;
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
            background: ${color.whiteFade};
        }
        &::-webkit-scrollbar-thumb{
            border-radius: 10px;
            background: ${color.blue};
        }
        &::-webkit-scrollbar-thumb:hover{F
            background: ${color.blackFade};
        }
        &::-webkit-scrollbar-thumb:active{
            background: #484848;
        }
    }
`

// Landing Page Style
export const Wrapper = styled.div`
    display: grid;
    grid-template: 80px 1fr 50px / 1fr;
    height: 100vh;
    width: 100vw;

`
export const HeaderStyle = styled.header`
    grid-column: 1 / span 3;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    background-color: ${color.black};
    color: ${color.white};
    font-size: 1.5rem;
    font-weight: bold;

    @media ${device.mobile} {
        gap: 5px;
    }
`
export const NavStyle = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;

    @media ${device.mobile} {
        width: 100%;
    }
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
`
export const MainStyle = styled.main`
    grid-column: 2;
    grid-row: 2;
    display: flex;
    width: 100vw;
    justify-content: center;
    align-items: center;
    padding: 0 20px;
    background-color: ${color.black};
    color: ${color.white};
    font-size: 1.5rem;
    font-weight: bold;
`
export const FormLandingStyle = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 75%;
    height: 100%;
    background-color: ${color.black};
    color: ${color.white};
    font-weight: bold;

    @media ${device.mobile} {
        width: 100%;
    }
`
export const FormHeaderStyle = styled(FormLandingStyle)`
    flex-direction: row;
`
export const LabelLandingStyle = styled.label`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    width: 100%;
    padding: 30px;
    border-radius: 10px;
    background-color: ${color.whiteFadeBg};
    color: ${color.white};
    font-size: 2rem;
    font-weight: bold;

    @media ${device.mobile} {
        padding: 20px;
        font-size: 1.5rem;
    }
`
export const LabelHeaderStyle = styled(LabelLandingStyle)`
    margin: 0 20px;
    background-color: ${color.black};

    @media ${device.mobile} {
        margin: 0;
        padding: 5px;
    }
`
export const SpanBlue = styled.span`
    color: ${color.blue};
    transition: 300ms;
`
export const LinkLogo = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${color.white};
    text-decoration: none;
    cursor: pointer;
    font-size: 2.5rem;
    transition: 500ms;

    &:hover {
        transform: scale(1.1);
        color: ${color.blue};
    }
    &:hover ${SpanBlue} {
        color: ${color.white};
    }

    @media ${device.mobile} {
        font-size: 1.2rem;
        padding-left: 10px;

        &:active {
            transform: scale(1.1);
            color: ${color.blue};
        }
    }
`
export const InputLandingStyle = styled.input`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 75%;
    height: 50px;
    padding: 0 10px;
    border-radius: 10px;
    background-color: ${color.black};
    color: ${color.whiteFade};
    font-size: 1.5rem;

    @media ${device.mobile} {
        width: 100%;
    }
`
export const InputHeader = styled(InputLandingStyle)`
    height: 40px;
    width: 100%;

    @media ${device.mobile} {
        width: 100%;
        font-size: .9rem;
    }
`
export const ButtonLandingStyle = styled.button`
    display: flex; 
    justify-content: center;
    align-items: center;
    width: 75%;
    height: 50px;
    background-color: ${color.black};
    color: ${color.white};
    font-size: 1.5rem;
    font-weight: bold;
    border: 1px solid ${color.white};
    border-radius: 10px;
    cursor: pointer;

    &:hover {
        background-color: ${color.white};
        color: ${color.black};
    }

    @media ${device.mobile} {
        width: 100%;
        &:active {
            transform: scale(0.9);
        }
    }
`
export const ButtonHeaderSearch = styled(ButtonLandingStyle)`
    width: 40px;
    height: 40px;
    padding: 10px;
    border: 2px solid ${color.white};
    border-radius: 50%;

    @media ${device.mobile} {
        margin-right: 10px;
    }
`

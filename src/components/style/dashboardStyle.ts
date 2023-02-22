import styled from "styled-components";
import { color, device } from "./utils/styleConstants";
import { Link } from "react-router-dom";

export const WrapperDashboard = styled.div`
    display: grid;
    grid-template-columns: 300px 1fr;
    width: 100%;
    height: 100%;
    gap: 20px;
    background-color: ${color.black};
    color: ${color.white};
    
    @media ${device.mobile} {
        grid-template-columns: 1fr;
    }
`

// Profile Section
export const SectionProfile = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${color.whiteFadeBg};
    padding: 30px 20px;
    width: 100%;
    height: calc(100vh - 130px);
    border-radius: 10px;
    overflow: auto;
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

    @media ${device.mobile} {
        height: auto;
    }
`
export const H1UserName = styled.h1`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    font-size: 1.9rem;
    color: ${color.white};
    transition: 300ms;

    @media ${device.mobile} {
        font-size: 1.5rem;
        margin-left: 35px;
        color: ${color.blue};
    }
`
export const LinkProfileData = styled(Link)`
    display: flex;
    background-color: ${color.black};
    flex-direction: column;
    justify-content: space-evenly;
    align-items: space-evenly;
    width: 100%;
    height: 100%;
    gap: 5px;
    color: ${color.white};
    padding: 200px 15px 10px;
    text-decoration: none;
    border-radius: 10px;
    border: 1px solid ${color.white};
    transition: 300ms;
    Position: relative;
    overflow: auto;
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

    @media ${device.mobile} {
        height: auto;
    }

    &:hover {
        transform: scale(1.05);
    }
    &:hover ${H1UserName} {
        color: ${color.blue};
    }

    @media ${device.mobile} {
        padding: 45px 15px 10px;
        justify-content: flex-start;
        gap: 25px;
        height: auto;
        &:active {
            transform: scale(1.05);
        }
    }
`
export const ImgUserAvatar = styled.img`
    position: absolute;
    top: 25px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 10px;
    width: 190px;
    height: 190px;
    object-fit: cover;

    @media ${device.mobile} {
        width: 60px;
        height: 60px;
        left: 50px;
        border-radius: 50%;
    }
`
export const DivFlex = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    align-items: center;
    width: 100%;
`
export const H2RepoList = styled.h2`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 1.8rem;
    color: ${color.white};
    width: 100%;
    font-weight: bold;
    padding-bottom: 10px;
`
export const PProfileData = styled.p`
    display: flex;
    align-items: center;
    font-size: 1.3rem;
    color: ${color.white};
    width: 100%;
    font-weight: lighter;
    padding-bottom: 10px;
`
export const SpanBold = styled.span`
    font-weight: bold;
    margin-left: 5px;
`

export const H2Profile = styled(H2RepoList)`
`

// Repo Section
export const SectionRepoList = styled(SectionProfile)`

`
export const FormSearchRepo = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    color: ${color.white};
    margin-bottom: 30px;
`
export const InputSearchRepo = styled.input`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    width: 75%;
    height: 50px;
    padding: 0 10px;
    border-radius: 10px;
    background-color: ${color.black};
    color: ${color.whiteFade};
    font-size: 1.5rem;

    @media ${device.mobile} {
        width: 100%;
        margin-top: 10px;
        font-size: 1.2rem;
    }
`
export const DivFlexRepo = styled(DivFlex)`
`
export const WrapperRepo = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    color: ${color.white};

    @media ${device.mobile} {
        justify-content: flex-start;
    }
`
export const H3RepoName = styled.h3`
    font-size: 1.5rem;
    color: ${color.white};
    transition: 300ms;
`
export const PRepoDescription = styled.p`
    font-size: 1.1rem;
    color: ${color.whiteFade};
`
export const DivLang = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${color.blue};
    font-size: .85rem;
    width: 100%;
    height: 100%;
    gap: 5px;
`
export const DivTopics = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    gap: 5px;
    width: 100%;
    height: auto;
` 
export const SpanTopic = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: .75rem;
    color: ${color.blue};
    background-color: ${color.white};
    padding: 5px 10px;
    border-radius: 10px;
`
export const LinkRepoCard = styled(Link)`
    display: flex;
    flex-direction: column;
    text-decoration: none;
    align-items: center;
    background-color: ${color.black};
    gap: 20px;
    padding: 20px;
    width: 320px;
    height: auto;
    color: ${color.white};
    transition: 300ms;
    cursor: pointer;
    border-radius: 10px;
    border: 1px solid ${color.white};
    margin: 15px;

    &:hover {
        transform: scale(1.1);
    }
    &:hover ${H3RepoName} {
        color: ${color.blue};
    }

    @media ${device.mobile} {
        width: 100%;
        margin: 10px 0;

        &:active {
            transform: scale(1.1);
        }
    }

`
import styled, { createGlobalStyle } from "styled-components";
import { color, device } from "./utils/styleConstants";
import { Link } from "react-router-dom";

export const WrapperDashboard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    gap: 20px;
    background-color: ${color.black};
    color: ${color.white};
`
export const WrapperProfileData = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    width: 100%;
    height: 100%;
    color: ${color.white};
`
export const H1UserName = styled.h1`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    color: ${color.white};
`
export const ImgUserAvatar = styled.img`
    border-radius: 50%;
    width: 50px;
    height: 50px;
`
export const SectionRepoList = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    color: ${color.white};
`
export const H2RepoList = styled.h2`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    color: ${color.white};
`
export const FormSearchRepo = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    color: ${color.white};
`
export const InputSearchRepo = styled.input`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 75%;
    height: 50px;
    padding: 0 10px;
    background-color: ${color.black};
    color: ${color.white};
    font-size: 1.5rem;
    font-weight: bold;
`
export const WrapperRepo = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 10px 0;
    width: 100%;
    height: 100%;
    color: ${color.white};
`
export const H3RepoName = styled.h3`
    font-size: 1.3rem;
    color: ${color.white};
    transition: 300ms;
`
export const PRepoDescription = styled.p`
    font-size: 1rem;
    color: ${color.whiteFade};
`
export const LinkRepoCard = styled(Link)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-decoration: none;
    align-items: center;
    gap: 20px;
    padding: 10px;
    width: 300px;
    height: 400px;
    color: ${color.white};
    transition: 300ms;
    cursor: pointer;

    &:hover {
        transform: scale(1.1);
    }
    &:hover ${H3RepoName} {
        color: ${color.blue};
    }
`
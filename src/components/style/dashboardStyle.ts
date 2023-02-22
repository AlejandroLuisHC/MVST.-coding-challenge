import styled from "styled-components";
import { color } from "./utils/styleConstants";
import { Link } from "react-router-dom";

export const WrapperDashboard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    gap: 20px;
    background-color: ${color.black};
    color: ${color.white};
`
export const H1UserName = styled.h1`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.8rem;
    color: ${color.white};
    transition: 300ms;
`
export const LinkProfileData = styled(Link)`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 70%;
    height: auto;
    color: ${color.white};
    padding: 10px 20px;
    text-decoration: none;
    border-radius: 10px;
    border: 1px solid ${color.white};
    transition: 300ms;

    &:hover {
        transform: scale(1.1);
    }
    &:hover ${H1UserName} {
        color: ${color.blue};
    }
`
export const ImgUserAvatar = styled.img`
    border-radius: 10px;
    width: 55px;
    height: 55px;
    object-fit: cover;
`
export const SectionRepoList = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: auto;
    color: ${color.white};
`
export const H2RepoList = styled.h2`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 1.8rem;
    color: ${color.white};
    margin: 50px 0 50px;
    width: 100%;
    font-weight: lighter;
    padding-bottom: 10px;
    border-bottom: 1px solid ${color.whiteFade};
`
export const H2Profile = styled(H2RepoList)`
    margin-top: 30px;
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
    width: 75%;
    height: 50px;
    padding: 0 10px;
    border-radius: 10px;
    background-color: ${color.black};
    color: ${color.whiteFade};
    font-size: 1.5rem;
    font-weight: bold;
`
export const WrapperRepo = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 10px 0;
    width: 100%;
    color: ${color.white};
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
export const LinkRepoCard = styled(Link)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-decoration: none;
    align-items: center;
    gap: 20px;
    padding: 20px;
    width: 350px;
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
`
import React from 'react'
import { useForm } from 'react-hook-form'
import { createSearchParams, useNavigate, useParams } from 'react-router-dom';
import { searchRepos } from '../api';
import { useQuery } from '@tanstack/react-query';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import {
    DivFlex,
    FormSearchRepo,
    H1UserName,
    H2Profile,
    H2RepoList,
    ImgUserAvatar,
    InputSearchRepo,
    LinkProfileData,
    PProfileData,
    SectionProfile,
    SectionRepoList,
    SpanBold,
    WrapperDashboard,
    WrapperRepo,
} from '../components/style/dashboardStyle';
import RepoCard from '../components/pages_components/Dashboard/RepoCard';


interface GitHubRepo {
    id: number;
    name: string;
    description: string;
    html_url: string;
    language: string;
    topics: string[];
}

const Dashboard = () => {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        watch,
    } = useForm();
    const { user } = useParams();
    const queryParams = new URLSearchParams(location.search)
    const search = queryParams.get('search')
    const { userData } = useSelector((state: RootState) => state.userData)

    // Check if search value is less than 3 characters
    if (search) {
        const searchValue = watch('search')
        searchValue.length < 3 && navigate({ pathname: `/${user}/` })
    }

    // Check if user is defined and display repositories
    if (user) {
        const { data, status } = useQuery(
            ['repositories', user],
            () => searchRepos(user)
        )

        return (
            (status === 'loading') ? <div>Loading...</div> :
                (status === 'error') ? <div>Error</div> :
                    <WrapperDashboard>
                        {
                            typeof userData !== 'boolean' &&
                            <SectionProfile>
                                <LinkProfileData to={userData.html_url}>
                                    <H1UserName>{userData.login}</H1UserName>
                                    <ImgUserAvatar src={userData.avatar_url} alt={userData.login} />
                                    <DivFlex>
                                        <PProfileData>Company: <SpanBold>{userData.company ?? 'Not provided'}</SpanBold></PProfileData>
                                        <PProfileData>Location: <SpanBold>{userData.location ?? 'Not provided'}</SpanBold></PProfileData>
                                        <PProfileData>Followers: <SpanBold>{userData.followers}</SpanBold></PProfileData>
                                        <PProfileData>Public repos: <SpanBold>{userData.public_repos}</SpanBold></PProfileData>
                                    </DivFlex>
                                </LinkProfileData>
                            </SectionProfile>
                        }
                        <SectionRepoList>
                            <H2RepoList>
                                Repositories:
                            </H2RepoList>
                            <FormSearchRepo onChange={
                                handleSubmit(data => {
                                    if (data.search.lenght < 4) {
                                        navigate({ pathname: `/${user}/` })
                                    }
                                    navigate({ pathname: `/${user}/`, search: `?${createSearchParams(data)}` })
                                })
                            }>
                                <InputSearchRepo
                                    type="text"
                                    placeholder="Search a repository..."
                                    {...register("search", {
                                        required: true,
                                        minLength: 3
                                    })}
                                />
                            </FormSearchRepo>
                            <WrapperRepo>
                            {search
                                ?
                                data.filter((repo: GitHubRepo) => repo.name.toLowerCase().includes(search.toLowerCase())).map((repo: GitHubRepo) => {
                                    return (
                                        <RepoCard key={repo.id}
                                            repo={repo}
                                        />
                                    )
                                })
                                :
                                data.map((repo: GitHubRepo) => {
                                    return (
                                        <RepoCard key={repo.id}
                                            repo={repo}
                                        />
                                    )
                                })
                            }
                            </WrapperRepo>
                        </SectionRepoList>
                    </WrapperDashboard>
        )
    } else {
        return (
            <div>Error retrieving params</div>
        )
    }
}

export default Dashboard
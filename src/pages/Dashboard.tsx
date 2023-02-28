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
    H2RepoList,
    ImgUserAvatar,
    InputSearchRepo,
    LinkProfileData,
    PProfileData,
    PProfileDataColumn,
    SectionProfile,
    SectionRepoList,
    SpanBold,
    WrapperDashboard,
    WrapperRepo,
} from '../components/style/dashboardStyle';
import RepoCard from '../components/pages_components/Dashboard/RepoCard';
import { PulseLoader } from 'react-spinners';

interface GitHubRepo {
    id: string;
    name: string;
    description: string;
    url: string;
    primaryLanguage: {
        name: string;
    };
    repositoryTopics: {
        nodes: {
            topic: {
                name: string;
            };
        }[];
    };
}

const Dashboard = () => {
    const navigate = useNavigate();
    const { user } = useParams();
    const { userData } = useSelector((state: RootState) => state.userData)

    const {
        register,
        handleSubmit,
        watch,
    } = useForm();

    // Check if search value is less than 3 characters
    const queryParams = new URLSearchParams(location.search)
    const search = queryParams.get('search')
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
            (status === 'loading') ? <PulseLoader color="#4392F1" /> :
                (status === 'error') ? <div>Error</div> :
                    <WrapperDashboard>
                        {
                            typeof userData !== 'boolean' &&
                            <SectionProfile>
                                <LinkProfileData to={userData.url}>
                                    <ImgUserAvatar src={userData.avatarUrl} alt={userData.login} />
                                    <H1UserName>{userData.login}</H1UserName>
                                    <DivFlex>
                                        <PProfileDataColumn>Company: <SpanBold>{userData.company ?? 'Not provided'}</SpanBold></PProfileDataColumn>
                                        <PProfileDataColumn>Location: <SpanBold>{userData.location ?? 'Not provided'}</SpanBold></PProfileDataColumn>
                                        <PProfileData>Followers: <SpanBold>{userData.followers.totalCount}</SpanBold></PProfileData>
                                        <PProfileData>Public repos: <SpanBold>{userData.publicRepositories.totalCount}</SpanBold></PProfileData>
                                        <PProfileData>Private repos: <SpanBold>{userData.privateRepositories.totalCount}</SpanBold></PProfileData>
                                    </DivFlex>
                                </LinkProfileData>
                            </SectionProfile>
                        }
                        <SectionRepoList>
                            <H2RepoList>
                                Repositories:
                            </H2RepoList>
                            <FormSearchRepo onSubmit={e => e.preventDefault()}
                                onChange={
                                    handleSubmit(data => {
                                        if (data.search.lenght < 4) {
                                            navigate({ pathname: `/${user}/` })
                                        }
                                        navigate({ pathname: `/${user}/`, search: `?${createSearchParams(data)}` })
                                    })
                                }
                            >
                                <InputSearchRepo
                                    type="text"
                                    placeholder="Search repository by name..."
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
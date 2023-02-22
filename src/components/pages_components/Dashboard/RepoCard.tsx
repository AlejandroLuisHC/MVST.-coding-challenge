import React, { FC } from 'react'
import { 
    H3RepoName, 
    PRepoDescription, 
    LinkRepoCard 
} from '../../style/dashboardStyle'

interface GitHubRepo {
    id: number;
    name: string;
    description: string;
    html_url: string;
}

interface StoreProviderProps {
    repo: GitHubRepo;
}

const RepoCard: FC<StoreProviderProps> = ({ repo }) => {
    return (
        <LinkRepoCard to={repo.html_url}>
            <H3RepoName>{repo.name}</H3RepoName>
            <PRepoDescription>{repo.description}</PRepoDescription>
        </LinkRepoCard>
    )
}

export default RepoCard
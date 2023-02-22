import React, { FC } from 'react'
import { 
    H3RepoName, 
    PRepoDescription, 
    LinkRepoCard, 
    DivFlexRepo,
    SpanTopic,
    DivTopics,
    DivLang
} from '../../style/dashboardStyle'
import { BsCodeSlash } from '@react-icons/all-files/bs/BsCodeSlash';

interface GitHubRepo {
    id: number;
    name: string;
    description: string;
    html_url: string;
    language: string;
    topics: string[];
}

interface StoreProviderProps {
    repo: GitHubRepo;
}

const RepoCard: FC<StoreProviderProps> = ({ repo }) => {
    return (
        <LinkRepoCard to={repo.html_url}>
            <H3RepoName>{repo.name}</H3RepoName>
            <PRepoDescription>{repo.description}</PRepoDescription>
            <DivFlexRepo>
                <DivLang>
                    <BsCodeSlash />{repo.language ?? 'Unknown'}
                </DivLang>               
                <DivTopics>
                    { 
                        repo.topics.length > 0 &&
                        repo.topics.map((topic, index) => (
                            <SpanTopic key={index}>
                                {topic}
                            </SpanTopic>
                        ))
                    }
                </DivTopics>
            </DivFlexRepo>
        </LinkRepoCard>
    )
}

export default RepoCard
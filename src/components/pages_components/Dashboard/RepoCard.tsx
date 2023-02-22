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

interface StoreProviderProps {
    repo: GitHubRepo;
}

const RepoCard: FC<StoreProviderProps> = ({ repo }) => {
    return (
        <LinkRepoCard to={repo.url}>
            <H3RepoName>{repo.name}</H3RepoName>
            <PRepoDescription>{repo.description}</PRepoDescription>
            <DivFlexRepo>
                <DivLang>
                    <BsCodeSlash />{repo.primaryLanguage.name ?? 'Unknown'}
                </DivLang>               
                <DivTopics>
                    { 
                        repo.repositoryTopics.nodes.length > 0 &&
                        repo.repositoryTopics.nodes.map((node, index) => (
                            <SpanTopic key={index}>
                                {node.topic.name}
                            </SpanTopic>
                        ))
                    }
                </DivTopics>
            </DivFlexRepo>
        </LinkRepoCard>
    )
}

export default RepoCard
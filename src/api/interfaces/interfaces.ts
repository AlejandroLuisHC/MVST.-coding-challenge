interface IGitHubRepo {
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

interface IGitHubUser {
    login: string;
    id: string;
    avatarUrl: string;
    company: string;
    location: string;
    url: string;
    followers: {
        totalCount: number;
    };
    publicRepositories: {
        totalCount: number;
    };
    privateRepositories: {
        totalCount: number;
    };
}

export type {
    IGitHubRepo,
    IGitHubUser,
}
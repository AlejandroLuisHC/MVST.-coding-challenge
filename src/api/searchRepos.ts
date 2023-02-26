import type { IGitHubRepo } from "./interfaces/interfaces";
import { loadEnv } from 'vite';


async function searchRepos(userName: string): Promise<IGitHubRepo[]> {
    const query = `
        query {
            user(login: "${userName}") {
                repositories(first: 100, orderBy: {field: CREATED_AT, direction: DESC}) {
                    nodes {
                        id
                        name
                        description
                        url
                        primaryLanguage {
                            name
                        }
                        repositoryTopics(first: 10) {
                            nodes {
                                topic {
                                    name
                                }
                            }
                        }
                    }
                }
            }
        }
    `

    const response = await fetch('https://api.github.com/graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
        },
        body: JSON.stringify({ query }),
    });

    if (response.status === 200) {
        const { data } = await response.json();
        return data.user.repositories.nodes.map((repo: any) => ({
            id: repo.id,
            name: repo.name,
            description: repo.description,
            url: repo.url,
            primaryLanguage: {
                name: repo.primaryLanguage ? repo.primaryLanguage.name : '',
            },
            repositoryTopics: {
                nodes: repo.repositoryTopics.nodes.map((node: any) => ({
                    topic: {
                        name: node.topic.name,
                    },
                })),
            },
        }));
    } else {
        return [];
    }
}

export default searchRepos;
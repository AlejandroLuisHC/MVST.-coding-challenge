interface GitHubUser {
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

async function searchUser(userName: string): Promise<GitHubUser | false> {
    const query = `
        query {
                user(login: "${userName}") {
                login
                id
                avatarUrl
                company
                location
                url
                followers {
                    totalCount
                }
                repositories(isFork: false, privacy: PUBLIC) {
                    totalCount
                }
                repositoriesContributedTo(includeUserRepositories: true) {
                    totalCount
                }
            }
        }
    `

    const response = await fetch('https://api.github.com/graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${import.meta.env.VITE_API_GITHUB_TOKEN}`,
        },
        body: JSON.stringify({ query }),
    });

    if (response.status === 200) {
        const { data }  = await response.json();
        console.log(data);
        
        if (data.user) {
            const { user } = data;
            
            return {
                login: user.login,
                id: user.id,
                avatarUrl: user.avatarUrl,
                company: user.company,
                location: user.location,
                url: user.url,
                followers: {
                    totalCount: user.followers.totalCount,
                },
                publicRepositories: {
                    totalCount: user.repositories.totalCount,
                },
                privateRepositories: {
                    totalCount: user.repositoriesContributedTo.totalCount - user.repositories.totalCount,
                },
            };
        } else {
            return false;
        }
    } else {
        return false;
    }
}

export default searchUser;

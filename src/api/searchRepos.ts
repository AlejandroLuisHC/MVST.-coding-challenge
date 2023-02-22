interface GitHubRepo {
    id: number;
    name: string;
    description: string;
    html_url: string;
    language: string;
    topics: string[];
}

async function searchRepos(userName: string): Promise<GitHubRepo[]> {
    const response = await fetch(`https://api.github.com/users/${userName}/repos`, {
        headers: {
            Authorization: `Bearer ${import.meta.env.VITE_API_GITHUB_TOKEN}`,
        },
    });

    if (response.status === 200) {
        const repoData = await response.json();
        return repoData.slice(0).reverse().map((repo: any) => {
            return {
                id: repo.id,
                name: repo.name,
                description: repo.description,
                html_url: repo.html_url,
                language: repo.language,
                topics: repo.topics,
            };
        });
    } else {
        return [];
    }
}

export default searchRepos;
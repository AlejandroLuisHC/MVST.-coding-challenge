interface GitHubRepo {
    id: number;
    name: string;
    description: string;
    html_url: string;
}

async function searchRepos(userName: string): Promise<GitHubRepo[]> {
    const response = await fetch(`https://api.github.com/users/${userName}/repos`, {
        headers: {
            Authorization: `Bearer ${import.meta.env.PERSONAL_ACCESS_TOKEN}`,
        },
    });

    if (response.status === 200) {
        const repoData = await response.json();
        return repoData.map((repo: any) => {
            return {
                id: repo.id,
                name: repo.name,
                description: repo.description,
                html_url: repo.html_url,
            };
        });
    } else {
        return [];
    }
}

export default searchRepos;
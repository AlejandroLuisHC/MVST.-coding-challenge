interface GitHubUser {
    login: string;
    id: number;
    avatar_url: string;
    html_url: string;
}

async function searchUser(userName: string): Promise<GitHubUser | false> {
    const response = await fetch(`https://api.github.com/users/${userName}`, {
        headers: {
            Authorization: `Bearer ${import.meta.env.PERSONAL_ACCESS_TOKEN}`,
        }
    });

    if (response.status === 200) {
        const userData = await response.json();
        return {
            login: userData.login,
            id: userData.id,
            avatar_url: userData.avatar_url,
            html_url: userData.html_url,
        };
    } else {
        return false;
    }
}

export default searchUser;

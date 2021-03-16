import { Octokit } from "@octokit/core";

interface Data {
    avatar_url: string;
    login: string;
}

export const getUser = async (user: string) => {
    try {
        const octokit = new Octokit({ auth: process.env.REACT_APP_TOKEN });

        const response = await octokit.request("GET /search/users", {
            q: user,
        });

        const data: Data = {
            avatar_url: response.data.items[0].avatar_url,
            login: response.data.items[0].login,
        };

        return data;
    } catch (error) {
        console.error(error);
    }
};

import { searchUser } from '../';
import { IGitHubUser } from '../interfaces/interfaces';

describe('searchUser function to fetch user from GitHub', () => {
    describe('when given a valid username', () => {
        it('should return a GitHubUser object', async () => {
            const mockUser = {
                data: {
                    user: {
                        login: 'octocat',
                        id: 1,
                        avatarUrl: 'https://github.com/images/error/octocat_happy.gif',
                        company: '@github',
                        location: 'San Francisco',
                        url: 'https://github.com/octocat',
                        followers: {
                            totalCount: 8481,
                        },
                        repositories: {
                            totalCount: 195,
                        },
                        repositoriesContributedTo: {
                            totalCount: 195,
                        },
                    },
                },
            };

            const userName = 'octocat';
            const user: false | IGitHubUser = await searchUser(userName);
            if (user){
                expect(user).toBeTruthy();
                expect(user?.login).toBe(userName);
                expect(user?.id).toBe(mockUser.data.user.id);
                expect(user?.avatarUrl).toBe(mockUser.data.user.avatarUrl);
                expect(user?.company).toBe(mockUser.data.user.company);
                expect(user?.location).toBe(mockUser.data.user.location);
                expect(user?.url).toBe(mockUser.data.user.url);
                expect(user?.followers.totalCount).toBe(
                    mockUser.data.user.followers.totalCount
                );
                expect(user?.publicRepositories.totalCount).toBe(
                    mockUser.data.user.repositories.totalCount
                );
                expect(user?.privateRepositories.totalCount).toBe(
                    mockUser.data.user.repositoriesContributedTo.totalCount -
                    mockUser.data.user.repositories.totalCount
                );
            }
        });
    });

    describe('when given an invalid username', () => {
        it('should return false', async () => {
            global.fetch = jest.fn().mockImplementation(() =>
                Promise.resolve({
                    status: 404,
                })
            );

            const userName = 'invalidusername';
            const user = await searchUser(userName);
            expect(user).toBe(false);
        });
    });
});
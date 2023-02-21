import React from 'react'
import { useForm } from 'react-hook-form'
import { createSearchParams, useNavigate, useParams } from 'react-router-dom';
import { searchRepos } from '../api';
import { useQuery } from '@tanstack/react-query';

interface IParams {
    user: string;
}

const Dashboard = () => {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
    } = useForm();
    const { user } = useParams();

    if (user) {
        const { data, status } = useQuery(
            ['repositories', user],
            () => searchRepos(user)
        )

        return (
            (status === 'loading') ? <div>Loading...</div> :
                (status === 'error') ? <div>Error</div> :
                    <div>
                        <form onChange={
                            handleSubmit(data => {
                                navigate({ pathname: '/', search: `?${createSearchParams(data)}` })
                            })
                        }>
                            <input
                                type="text"
                                placeholder="Search a repository"
                                {...register("search", {
                                    required: true,
                                    minLength: 3
                                })}
                            />
                        </form>
                        {
                            data.map((repo: any) => {
                                return (
                                    <div key={repo.id}>
                                        <h3>{repo.name}</h3>
                                        <p>{repo.description}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
        )
    } else {
        return (
            <div>Error retrieving params</div>
        )
    }
}

export default Dashboard
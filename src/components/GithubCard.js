import React, { useEffect, useState } from 'react';

export const GithubCard = ({ username }) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const getData = async () => {
            const res = await fetch(`https://apigithub.com/users/${username}`);
            const json = await res.json();
            setData(json);
        }
        getData();
    }, [username]);

    return data ? (
        <div>
            <h2>{data.name}</h2>
            <p>Repos: {data.public_repos}</p>
            <p>Followers: {data.followers}</p>
        </div>
    ) : <p>Loading...</p>
}
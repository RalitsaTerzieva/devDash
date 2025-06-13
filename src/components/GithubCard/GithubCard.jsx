import React, { useEffect, useState } from 'react';
import './GithubCard.css';

export const GithubCard = ({ username }) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const getData = async () => {
            try {
                const res = await fetch(`https://api.github.com/users/${username}`);
                const json = await res.json();
                setData(json);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        getData();
    }, [username]);

    return data ? (
        <div className="github-card">
            <img className="avatar" src={data.avatar_url} alt={`${data.login} avatar`} />
            <div className="info">
                <h2>{data.name || data.login}</h2>
                <p><strong>Repos:</strong> {data.public_repos}</p>
                <p><strong>Followers:</strong> {data.followers}</p>
                <a href={data.html_url} target="_blank" rel="noreferrer">View Profile</a>
            </div>
        </div>
    ) : <p className="loading">Loading...</p>;
};

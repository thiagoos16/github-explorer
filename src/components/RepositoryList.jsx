import { useState, useEffect } from 'react';
import { RespositoryItem } from "./RepositoryItem";

import '../styles/repositories.scss';

// https://api.github.com/orgs/rocketseat/repos

export function RepositoryList() {
    const [repositories, setRepositories] =  useState([]);

    useEffect(() => {
        fetch('https://api.github.com/orgs/rocketseat/repos')
        .then(response => response.json())
        .then(data => setRepositories(data))
    }, []);

    return (
        <section className="repository-list">
            <h1>Lista de respositórios</h1>
            
            <ul>
                {repositories.map(repository => {
                    return <RespositoryItem key={repository.name} repository={repository}/>  
                })}
            </ul>
        </section>
    )
}
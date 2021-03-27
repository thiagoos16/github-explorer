import { useState, useEffect } from 'react';
import { RespositoryItem } from "./RepositoryItem";

import '../styles/repositories.scss';

// https://api.github.com/orgs/rocketseat/repos

const repository = {
    name: 'unform',
    description: 'forms in react',
    link: 'https://github.com/unform/unform'
};

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
                <>
                    <RespositoryItem repository={repository}/>
                    <RespositoryItem repository={repository}/>
                    <RespositoryItem repository={repository}/>
                </>
            </ul>
        </section>
    )
}
import { RespositoryItem } from "./RepositoryItem";

const repository = {
    name: 'unform',
    description: 'forms in react',
    link: 'https://github.com/unform/unform'
};

export function RepositoryList() {
    return (
        <section>
            <h1>Lista de respositórios</h1>
            
            <ul>
                <RespositoryItem repository={repository}/>
                <RespositoryItem repository={repository}/>
                <RespositoryItem repository={repository}/>
            </ul>
        </section>
    )
}
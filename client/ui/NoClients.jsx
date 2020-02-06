import React from 'react'
import { Link } from 'react-router-dom'

const NoClients = props => (
    <div className="NoClients">
        <h2>Nenhum cliente cadastrado</h2>

        <Link to="/newclient" className="button">Cadastrar cliente</Link>
    </div>
)

export default NoClients
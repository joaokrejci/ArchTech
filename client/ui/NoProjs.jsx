import React from 'react'
import './css/NoProj.css'
import { Link } from 'react-router-dom'

const NoProj = props => (
    <div className="NoProj">
        <h2>Bem vindo ao ArchTech</h2>
        <p>Comece cadastrando seu primeiro projeto</p>

        <Link to="/newproject" className="button">Cadastrar projeto</Link>
    </div>
)

export default NoProj
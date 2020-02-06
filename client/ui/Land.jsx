import React from 'react'
import { Meteor } from 'meteor/meteor'
import { Link } from 'react-router-dom'
import { useTracker } from 'meteor/react-meteor-data'
import { Route } from 'react-router-dom'

import Projects from './Projects'
import NewProject from './NewProject'
import Clients from './Clients'
import NewClient from './NewClient'

const Land = props => {
    this.logout = function() {
        Meteor.logout()
    }
    if (!props.user) return (<p>carregando...</p>)
    return (
        <div className="Land">
            <header>
                <h1>Olá, {props.user.username}</h1>
                <Link to="/" onClick={Meteor.logout}>logout</Link>
            </header>
            <nav>
                <Link to="/projetos">Projetos</Link>
                <Link to="/clientes">Clientes</Link>
            </nav>
            <div id="content">
                <Route path="/projetos"  component={Projects} />
                <Route path="/newproject" component={NewProject} />
                <Route path="/clientes"  component={Clients} />
                <Route path="/newclient" component={NewClient} />
            </div>
        </div>
    )
}

export default Land

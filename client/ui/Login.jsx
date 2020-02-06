import React from 'react'
import { Meteor } from 'meteor/meteor'
import {Link} from 'react-router-dom'

class Login extends React.Component {

    handleSubmit(ev) {  
        ev.preventDefault()      
        Meteor.loginWithPassword(this.email.value, this.password.value, err => {
            if (err) console.log(err)
        })
    }

    render() {
        return (
            <div className="UserRegistration">
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <label htmlFor="email">Email</label>
                    <input id="email" ref={input => this.email = input}></input>
                    <label htmlFor="password">Senha</label>
                    <input id="password" type="password" ref={input => this.password = input}></input>
                    <input id="submit" type="submit" value="ENVIAR" />
                </form>
                <Link to="/signup">Criar Conta</Link>
            </div>
        )
    }
}

export default Login
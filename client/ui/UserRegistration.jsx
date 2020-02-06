import React from 'react'
import {Accounts} from 'meteor/accounts-base'
import { Redirect } from 'react-router'

class UserRegistration extends React.Component {

    handleSubmit(ev){
        ev.preventDefault()
        Accounts.createUser({
            email: this.email.value,
            username: this.username.value,
            password: this.password.value
        }, err => {
            if(err) console.log(err)
        })
    }

    render(){
        if(!Meteor.user()) return (
            <div className="UserRegistration">
                <h1>CADASTRO DE USUÁRIO</h1>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <label htmlFor="email">Email</label>
                    <input id="email" ref={ input => this.email = input}></input>
                    <label htmlFor="username">Nome de Usuário</label>
                    <input id="username" ref={input => this.username = username}></input>
                    <label htmlFor="password">Senha</label>
                    <input id="password" type="password" ref={ input => this.password = input}></input>
                    <input id="submit" type="submit" value="ENVIAR" />
                </form>
            </div>
        )
        else return <Redirect to="/" />
    }
}

export default UserRegistration
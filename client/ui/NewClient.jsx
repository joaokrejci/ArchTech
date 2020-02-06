import React from 'react'
import {Meteor} from 'meteor/meteor'
import gql from 'graphql-tag'

class NewClient extends React.Component {

    handleSubmit(ev) {
        ev.preventDefault()

        
    }

    render() {
        return (
            <div className='NewProject'>
                <h2>NOVO CLIENTE</h2>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <label htmlFor='nome'>Nome do Cliente</label>
                    <input id='nome' ref={i => this.nome = i} />
                    <label htmlFor='email'>Email</label>
                    <input type='email' id='email' ref={i => this.email = i} />
                </form>
            </div>
        )
    }
}

export default NewClient
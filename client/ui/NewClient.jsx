import React from "react";
import { Meteor } from "meteor/meteor";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";
import { Redirect } from "react-router";

const INSERT_CLIENT = gql`
  mutation insertCliente($nome: String!, $email: String!, $arquiteto: ID!){
    insertCliente(nome: $nome, email: $email, arquiteto: $arquiteto){
      _id
    }
  }
`

const NewClient = props => {  
  const [insertProjeto, { data }] = useMutation(INSERT_CLIENT)

  this.handleSubmit = function (ev) {
    ev.preventDefault();
    insertProjeto({variables: {nome: this.nome.value, email: this.email.value, arquiteto: Meteor.userId()}})
  };
  return (
    <div className="NewClient">
      <h2>NOVO CLIENTE</h2>
      <form onSubmit={this.handleSubmit.bind(this)}>
        <label htmlFor="nome">Nome do Cliente</label>
        <input id="nome" ref={i => this.nome = i} />
        <label htmlFor="email">Email</label>
        <input id="email" ref={i => this.email = i} />        
        <button>Inserir</button>
      </form>
      {data? <Redirect to="/clientes" /> : null}
    </div>
  );
};

export default NewClient;

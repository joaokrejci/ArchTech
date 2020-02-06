import React from "react";
import { Meteor } from "meteor/meteor";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";
import { Redirect } from "react-router";

const INSERT_PROJECT = gql`
  mutation insertProject($nome: String!, $arquiteto: ID!){
    insertProjeto(nome: $nome, arquiteto: $arquiteto){
      _id
    }
  }
`

const NewProject = props => {  
  const [insertProjeto, { data }] = useMutation(INSERT_PROJECT)

  this.handleSubmit = function (ev) {
    ev.preventDefault();
    insertProjeto({variables: {nome: this.nome.value, arquiteto: Meteor.userId()}}).then( res => {this.console.log("sucesso")})        
  };
  return (
    <div className="NewProject">
      <h2>NOVO PROJETO</h2>
      <form onSubmit={this.handleSubmit.bind(this)}>
        <label htmlFor="nome">Nome do Projeto</label>
        <input id="nome" ref={i => (this.nome = i)} />
        <button>Inserir</button>
      </form>
      {data? <Redirect to="/projetos" /> : null}
    </div>
  );
};

export default NewProject;

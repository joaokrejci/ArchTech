import React, { Fragment } from "react";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import { Link } from 'react-router-dom'

import NoClients from "./NoClients";

const QUERY_CLIENTS = gql`
    query clients($arquiteto: ID!) {
        clientesArquiteto(arquiteto: $arquiteto) {
          _id
          nome
          email
        }
    }
`

const Clients = props => {
  const { loading, error, data } = useQuery(QUERY_CLIENTS, { variables: { arquiteto: Meteor.userId() } })

  if (loading) return "Carregando..."
  if (error) return "Erro!" + error

  console.log(data)

  if (!loading && data.clientesArquiteto.length == 0) return <NoClients />;
  return (
    <div className="Manage">
      <h1>Clientes</h1>
      <ul>
        {
          data.clientesArquiteto.map((cliente, key) => (
            <li key={key}>{cliente.nome}</li>
          ))
        }
      </ul>
      <Link to="/newclient" className="button">Novo Cliente</Link>
    </div>
  );
};

export default Clients;

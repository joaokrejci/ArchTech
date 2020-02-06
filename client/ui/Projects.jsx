import React, { Fragment } from "react";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import {Link} from 'react-router-dom'

import NoProjs from "./NoProjs";

const QUERY_PROJECTS = gql`
    query Projects($arquiteto: ID!) {
        projetosArquiteto(arquiteto: $arquiteto) {
          _id
          nome
        }
    }
`

const Projects = props => {
  const { loading, error, data } = useQuery(QUERY_PROJECTS, { variables: { arquiteto: Meteor.userId() } })

  if (loading) return "Carregando..."
  if (error) return "Erro!" + error

  if (!loading && data.projetosArquiteto.length == 0) return <NoProjs />;
  return (
    <Fragment>
      <h1>Projetos</h1>
      <ul>
        {
          data.projetosArquiteto.map((proj, key) => {
            <li key={key}>{proj.nome}</li>
          })
        }
      </ul>
      <Link to="/newproject" className="button">Novo Projeto</Link>
    </Fragment>
  );
};

export default Projects;

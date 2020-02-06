import React from 'react';
import { Meteor } from 'meteor/meteor'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { useTracker } from 'meteor/react-meteor-data'
import { ApolloProvider } from '@apollo/react-hooks'
import ApolloClient, { gql } from 'apollo-boost'

import Land from './Land'
import Login from './Login'
import UserRegistration from './UserRegistration'

const client = new ApolloClient({
  uri: "http://localhost:4000"
})

const App = () => {
  const user = useTracker(() => Meteor.user(), [])

  return (
    <ApolloProvider client={client}>
      <div>
        <Router>
          <Switch>
            <Route path="/signup">
              <UserRegistration />
            </Route>
            <Route path="/">
              {Meteor.userId() ? <Land user={user} /> : <Login />}
            </Route>
          </Switch>
        </Router>
      </div>
    </ApolloProvider>
  )
}

export default App;

import React from 'react'
import CreateAccount from './pages/Home'
import Login from './pages/Login'
import Teams from './pages/Teams'
import Counter from './pages/Counter'
import PrivateRoute from './components/PrivateRoute'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

// Com return (quando temos mais código além de apenas um retorno)
export const App = () => (
  <Router>
    <Switch>
      <PrivateRoute path="/times">
        <Teams />
      </PrivateRoute>
      <PrivateRoute path="/counter">
        <Counter />
      </PrivateRoute>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/">
        <CreateAccount />
      </Route>
    </Switch>
  </Router>
)

export default App

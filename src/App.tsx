import React from 'react'
import Home from './pages/Home'
import Login from './pages/Login'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

// Com return (quando temos mais código além de apenas um retorno)
export const App = () => (
  <Router>
    <Switch>
      <Route path="/area-cliente">
        <Home />
      </Route>
      <Route path="/">
        <Login />
      </Route>
    </Switch>
  </Router>
)

export default App

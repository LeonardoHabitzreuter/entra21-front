import React from 'react'
import { Route } from 'react-router-dom'
import { getData } from '/storage'

type Props = {
  children: React.ReactNode
  path: string
}

// type RouteProps = {
//   children: (props: { userId: string }) => React.ReactNode
// }

// const RouteComponent = ({ children }: RouteProps) => (
//   <>
//     {children({ userId: '123' })}
//   </>
// )

const PrivateRoute = ({ children, path }: Props) => (
  <Route path={path}>
    {/* Render props */}
    {/* https://pt-br.reactjs.org/docs/render-props.html */}
    {({ history }) => {
      const { token } = getData()

      // https://www.w3schools.com/js/js_comparisons.asp
      // token === null || token === undefined || token === ''
      if (!token) history.push('/login')

      return children
    }}
  </Route>
)

export default PrivateRoute

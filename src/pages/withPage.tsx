import React from 'react'
import { useTitle } from 'react-use'

// High order component
const withPage = (title: string, Component: React.FunctionComponent) => {
  const Page = () => {
    useTitle(title)

    return <Component />
  }

  return Page
}

export default withPage

import React from 'react'

export default class NotFound extends React.Component {

  componentWillMount() {
    window.location = '/'
  }

  render() {
    return <h1>Page Not Found. Redirecting...</h1>
  }
}

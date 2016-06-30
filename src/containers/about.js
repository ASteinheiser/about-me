import React from 'react'
import StyledText from '../components/styled-text'

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <StyledText
          text="Hi. I'm Andrew"
          size="large"
          color="white"
        />
        <br />
        <br />
        <StyledText
          text="And I like to make websites with React.js!"
          size="regular"
          color="white"
        />
        <br />
        <br />
        <StyledText
          text="I also like to connect things to the internet"
          size="regular"
          color="white"
        />
        <br />
        <br />
        <StyledText
          text="And write guides on how to make things!"
          size="regular"
          color="white"
        />
      </div>
    )
  }
}

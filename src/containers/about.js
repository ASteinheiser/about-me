import React from 'react'
import StyledText from '../components/styled-text'

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <StyledText
          text="Hi. I'm Andrew"
          color="white"
          size="large"
        />
        <br />
        <br />
        <StyledText
          text="And I like to make websites with React.js!"
          color="white"
          size="regular"
        />
        <br />
        <br />
        <StyledText
          text="I also like to connect things to the internet"
          color="white"
          size="regular"
        />
        <br />
        <br />
        <StyledText
          text="And write guides on how to make things!"
          color="white"
          size="regular"
        />
      </div>
    )
  }
}

import React from 'react'
import Description from '../components/Description'
import Title from '../components/Title'

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <Title>
          Hi. I'm Andrew
        </Title>
        <Description>
          I like to make websites!
        </Description>
      </div>
    )
  }
}

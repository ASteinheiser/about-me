import React from 'react'
import StyledText from '../components/styled-text'

import styles from './styles.css'

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <br />
        <StyledText
          text="I AM ANDREW"
          size="billboard"
          color="blue"
        />
        <br />
        <br />
        <br />
        <StyledText
          text="I like to make websites with React.js,"
          size="regular"
          color="white"
        />
        <br />
        <StyledText
          text="connect things to the internet, tinker,"
          size="regular"
          color="white"
        />
        <br />
        <StyledText
          text="and write guides on how to make your"
          size="regular"
          color="white"
        />
        <br />
        <StyledText
          text="own IoT (Internet of Things) devices!"
          size="regular"
          color="white"
        />
        <br />
        <br />
        <br />
        <StyledText
          text="If you would like to contact me,"
          size="regular"
          color="white"
        />
        <br />
        <StyledText
          text="my email is"
          size="regular"
          color="white"
        />
        <StyledText
          text=" me@iamandrew.io"
          size="regular"
          color="blue"
        />
        <br />
        <br />
        <br />
        <a target="_blank" href="https://s3-us-west-2.amazonaws.com/iamandrew.io-images/resume2017.pdf" className={[styles.noDecoration]}>
          <StyledText
            text="Click here to view my resume"
            size="regular"
            color="white"
            hoverBlue
          />
        </a>
      </div>
    )
  }
}

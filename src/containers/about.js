import React from 'react'

import StyledText from '../components/styled-text'
import SocialLinks from '../components/social-links'

import styles from './styles.css'

export default class Home extends React.Component {
  render() {
    return (
      <div className={[styles.aboutBody]}>
        <div className={[styles.header]}>
          <StyledText
            text="I AM ANDREW"
            size="billboard"
            color="blue"
          />
        </div>
        <div className={[styles.aboutContent]}>
          <StyledText
            text="I like to make websites with React.js, connect things to the internet, tinker, and write guides on how to make your own Internet of Things (IoT) devices!"
            size="regular"
            color="black"
          />
          <br />
          <br />
          <br />
          <StyledText
            text="You can check out my IoT projects on Hackster.io, and keep up with my code on Github.com... Links below!"
            size="regular"
            color="black"
          />
          <br />
          <br />
          <br />
          <StyledText
            text="If you would like to contact me, my email is:"
            size="regular"
            color="black"
          />
          <br/>
          <StyledText
            text=" me@iamandrew.io"
            size="regular"
            color="blue"
          />
          <br />
          <br />
          <br />
          <SocialLinks />
          <br />
          <br />
          <a target="_blank" href="https://s3-us-west-2.amazonaws.com/iamandrew.io-images/resume2017.pdf" className={[styles.noDecoration]}>
            <StyledText
              text="Click here to view my resume"
              size="regular"
              color="black"
              hoverBlue
            />
          </a>
        </div>
      </div>
    )
  }
}

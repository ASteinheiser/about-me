import React from 'react'

import StyledText from '../components/styled-text'
import SocialLinks from '../components/social-links'
import ResumePDF from '../images/Resume_2018.pdf'

import styles from './styles.css'

export default class Contact extends React.Component {
  render() {
    return (
      <div className={[styles.aboutBody]}>
        <div className={[styles.innerWidth]}>
          <div className={[styles.header]}>
            <StyledText
              text="I am Andrew..."
              size="billboard"
              color="red"
            />
          </div>
          <div className={[styles.aboutContent]}>
            <StyledText
              text="... Steinheiser. I'm a programmer, artist, and business owner."
              size="regular"
              color="black"
            />
            <br />
            <br />
            <StyledText
              text="My most recent work has revolved around creating sites with React.js, connecting things to the internet, and writing guides on how to make your very own IoT devices!"
              size="regular"
              color="black"
            />
            <br />
            <br />
            <StyledText
              text="You can check out my IoT projects on Hackster.io, and keep up with my code on Github.com..."
              size="regular"
              color="black"
            />
            <br />
            <br />
            <StyledText
              text="CONTACT ME: "
              size="regular"
              color="black"
            />
            <a target="_blank" href="mailto:me@iamandrew.io" className={[styles.noDecoration]}>
              <StyledText
                text="me@iamandrew.io"
                size="regular"
                color="black"
                hoverUnderline
              />
            </a>
            <br />
            <br />
            <a target="_blank" href={ResumePDF} className={[styles.noDecoration]}>
              <StyledText
                text="CLICK HERE to view my Resume"
                size="regular"
                color="black"
                hoverUnderline
              />
            </a>
            <br />
            <br />
            <br />
            <SocialLinks />
          </div>
        </div>
      </div>
    )
  }
}

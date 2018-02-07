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
              text="> i am andrew"
              size="billboard"
              color="black"
              hoverRed
            />
          </div>
          <div className={[styles.aboutContent]}>
            <StyledText
              text="... Steinheiser. I'm a developer, artist, and business owner in Tempe, AZ."
              size="regular"
              color="black"
            />
            <br />
            <br />
            <StyledText
              text="I like to spend time creating websites and designing streetwear!"
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
            <SocialLinks />
          </div>
        </div>
      </div>
    )
  }
}

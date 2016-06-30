import React from 'react'
import StyledText from '../styled-text'

import styles from './styles.css'

export default class SocialLinks extends React.Component {

  render() {
    return (
      <div className={[styles.socialContainer]}>

        <StyledText
          text="Social Media"
          color="black"
          size="large"
        />
        <br />
        <a href="https://github.com/ASteinheiser" className={[styles.socialButton]}>

          <i className="fa fa-github-square" />
          <StyledText
            text="GitHub"
            color="black"
            size="regular"
          />
        </a>
        <br />
        <a href="https://www.hackster.io/andrewstein" className={[styles.socialButton]}>

          <span className={[styles.hackster]}>H</span>
          <StyledText
            text="Hackster"
            color="black"
            size="regular"
          />
        </a>
        <br />
        <a href="https://twitter.com/ASteinheiser" className={[styles.socialButton]}>

          <i className="fa fa-twitter-square" />
          <StyledText
            text="Twitter"
            color="black"
            size="regular"
          />
        </a>
        <br />
        <a href="https://www.instagram.com/asteinheiser/" className={[styles.socialButton]}>

          <i className="fa fa-instagram" />
          <StyledText
            text="Instagram"
            color="black"
            size="regular"
          />
        </a>
      </div>
    )
  }
}

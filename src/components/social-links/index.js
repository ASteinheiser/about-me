import React from 'react'

import StyledText from '../styled-text'
import hacksterLogo from '../../images/hackster.svg'

import styles from './styles.css'

export default class SocialLinks extends React.Component {

  render() {
    return (
      <div>
        <div className={[styles.center]}>
          <a target="_blank" href="https://github.com/ASteinheiser" className={[styles.socialButton]}>
            <i className="fa fa-github-square" />
            <div className={[styles.divider]} />
            <StyledText
              text="Github"
              size="small"
              topAlign
              paddingTop
            />
          </a>

          <a target="_blank" href="https://www.hackster.io/andrewstein" className={[styles.socialButton]}>
            <img className={[styles.hackster]} src={hacksterLogo} role="presentation" />
            <StyledText
              text="Hackster"
              size="small"
              topAlign
              paddingTop
            />
          </a>

          <a target="_blank" href="https://www.instagram.com/asteinheiser/" className={[styles.socialButton]}>
            <i className="fa fa-instagram" />
            <div className={[styles.divider]} />
            <StyledText
              text="Instagram"
              size="small"
              topAlign
              paddingTop
            />
          </a>
        </div>

        <div className={[styles.center]}>
          <a target="_blank" href="https://www.linkedin.com/in/andrew-steinheiser-8989b1122" className={[styles.socialButton]}>
            <i className="fa fa-linkedin" />
            <div className={[styles.divider]} />
            <StyledText
              text="Linkedin"
              size="small"
              topAlign
              paddingTop
            />
          </a>

          <a target="_blank" href="https://twitter.com/ASteinheiser" className={[styles.socialButton]}>
            <i className="fa fa-twitter-square" />
            <div className={[styles.divider]} />
            <StyledText
              text="Twitter"
              size="small"
              topAlign
              paddingTop
            />
          </a>

          <a target="_blank" href="https://www.facebook.com/andrewsteinheiser" className={[styles.socialButton]}>
            <i className="fa fa-facebook" />
            <div className={[styles.divider]} />
            <StyledText
              text="Facebook"
              size="small"
              topAlign
              paddingTop
            />
          </a>
        </div>
      </div>
    )
  }
}

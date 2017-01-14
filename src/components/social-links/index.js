import React from 'react'

import StyledText from '../styled-text'

import styles from './styles.css'

export default class SocialLinks extends React.Component {

  render() {
    return (
      <div className={[styles.socialContainer]}>

        <a target="_blank" href="https://github.com/ASteinheiser" className={[styles.socialButton]}>

          <i className="fa fa-github-square" />

          <div className={[styles.divider]} />

          <StyledText
            text="Github"
            size="small"
            bold
            topAlign
          />

        </a>

        <a target="_blank" href="https://www.hackster.io/andrewstein" className={[styles.socialButton]}>

          <img className={[styles.hackster]} src="https://s3-us-west-2.amazonaws.com/iamandrew.io-images/hackster.svg" role="presentation" />

          <StyledText
            text="Hackster"
            size="small"
            bold
            topAlign
          />

        </a>

        <br />
        <br />

        <a target="_blank" href="https://twitter.com/ASteinheiser" className={[styles.socialButton]}>

          <i className="fa fa-twitter-square" />

          <div className={[styles.divider]} />

          <StyledText
            text="Twitter"
            size="small"
            bold
            topAlign
          />

        </a>

        <a target="_blank" href="https://www.linkedin.com/in/andrew-steinheiser-8989b1122" className={[styles.socialButton]}>

          <i className="fa fa-linkedin" />

          <div className={[styles.divider]} />

          <StyledText
            text="Linkedin"
            size="small"
            bold
            topAlign
          />

        </a>

        <br />
        <br />

        <a target="_blank" href="https://www.instagram.com/asteinheiser/" className={[styles.socialButton]}>

          <i className="fa fa-instagram" />

          <div className={[styles.divider]} />

          <StyledText
            text="Insta"
            size="small"
            bold
            topAlign
          />

        </a>

        <a target="_blank" href="https://www.facebook.com/andrewsteinheiser" className={[styles.socialButton]}>

          <i className="fa fa-facebook" />

          <div className={[styles.divider]} />

          <StyledText
            text="Facebook"
            size="small"
            bold
            topAlign
          />

        </a>

      </div>
    )
  }
}

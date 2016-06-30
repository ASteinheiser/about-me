import React from 'react'

import styles from './styles.css'

export default class SocialLinks extends React.Component {

  render() {
    return (
      <div className={[styles.socialContainer]}>
        <a href="https://github.com/ASteinheiser" className={[styles.socialButton]}>
          <i className="fa fa-github-square" />
        </a>
        <a href="https://www.hackster.io/andrewstein" className={[styles.socialButton]}>
          <span className={[styles.hackster]}>H</span>
        </a>
        <a href="https://twitter.com/ASteinheiser" className={[styles.socialButton]}>
          <i className="fa fa-twitter-square" />
        </a>
        <a href="https://www.instagram.com/asteinheiser/" className={[styles.socialButton]}>
          <i className="fa fa-instagram" />
        </a>
      </div>
    )
  }
}

import React from 'react'
import { TwitterButton } from 'react-social'

import styles from './styles.css'

class AboutSection extends React.Component {

  render() {
    return (
      <span className={[styles.aboutContainer]}>
        Andrew Steinheiser
        <br />
        <br />
        Intern at Octoblu
        <br />
        <br />
        Computer Science
        <br />
        AZ State 2018
        <br />
        <TwitterButton url="https://twitter.com/ASteinheiser" media="https://platform.twitter.com/widgets/follow_button.178875e873dd548f81376d8be28c2163.en.html#dnt=false&id=twitter-widget-3&lang=en&preview=true&screen_name=ASteinheiser&show_count=false&show_screen_name=true&size=m&time=1466665177857"/>
      </span>
    )
  }
}

export default AboutSection

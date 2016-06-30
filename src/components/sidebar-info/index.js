import React from 'react'
import SocialLinks from '../social-links'

import styles from './styles.css'

export default class SidebarInfo extends React.Component {

  render() {
    return (
      <div className={[styles.container]}>
        Intern at Octoblu
        <br />
        <br />
        Computer Sci
        <br />
        AZ State 2018
        <br />
        <br />
        andrew@
        octoblu.com
        <br />
        <SocialLinks />
      </div>
    )
  }
}

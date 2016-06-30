import React from 'react'

import styles from './styles.css'

class ProfileImage extends React.Component {

  render() {
    return <img src="images/profile.jpg" role="presentation" className={[styles.image]} />
  }
}

export default ProfileImage

import React from 'react'

import styles from './styles.css'

class Description extends React.Component {

  render() {
    return (
      <div className={[styles.descriptionContainer]}>
        <span className={[styles.descriptionText]}>
          Hi, my name is Andrew Steinheiser!
        </span>
      </div>
    )
  }
}

export default Description

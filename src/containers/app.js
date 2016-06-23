import React, { PropTypes } from 'react'
import ProfileImage from '../components/ProfileImage/index'

import styles from './styles.css'

const propTypes = {
  children: PropTypes.element.isRequired,
}

export default class App extends React.Component {
  render() {
    return (
      <div className={[styles.fullWindow]}>
        <div className={[styles.sidebar]}>
          <ProfileImage />
        </div>
        <div className={[styles.content]}>
          {this.props.children}
        </div>
      </div>
    )
  }
}

App.propTypes = propTypes

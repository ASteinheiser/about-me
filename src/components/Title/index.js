import React, { PropTypes } from 'react'

import styles from './styles.css'

const propTypes = {
  children: PropTypes.element.isRequired,
}

export default class Title extends React.Component {

  render() {
    return (
      <div className={[styles.titleContainer]}>
        <span className={[styles.titleText]}>
          {this.props.children}
        </span>
      </div>
    )
  }
}

Title.PropTypes = propTypes

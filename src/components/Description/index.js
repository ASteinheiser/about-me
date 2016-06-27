import React, { PropTypes } from 'react'

import styles from './styles.css'

const propTypes = {
  children: PropTypes.element.isRequired,
}

export default class Description extends React.Component {

  render() {
    return (
      <div className={[styles.descriptionContainer]}>
        <span className={[styles.descriptionText]}>
          {this.props.children}
        </span>
      </div>
    )
  }
}

Description.PropTypes = propTypes

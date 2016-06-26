import React, { PropTypes } from 'react'
import classnames from 'classnames'

import styles from './styles.css'

const propTypes = {
  children: PropTypes.element.isRequired,
}

class TopNav extends React.Component {

  render() {
    const tabStyles = classnames(
      styles.topNavElement,
      styles.active
    )

    return (
      <div>
        <div className={[styles.topNavContainer]}>
          <div className={[styles.topNavElement]}>
            Tab
          </div>
          <div className={[styles.topNavElement]}>
            Tab
          </div>
          <div className={tabStyles}>
            Tab
          </div>
        </div>
        {this.props.children}
      </div>
    )
  }
}

TopNav.propTypes = propTypes

export default TopNav

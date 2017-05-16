import React, { PropTypes } from 'react'

import TopNavTab from '../top-nav-tab'

import styles from './styles.css'

const propTypes = {
  currentPage: PropTypes.string.isRequired,
}

export default class TopNav extends React.Component {

  render() {
    return (
      <div className={[styles.navBar]}>
        <div className={[styles.width]}>
          <TopNavTab
            text="contact"
            linkTo="/contact"
            active={this.props.currentPage === '/contact'}
          />
          <TopNavTab
            text="read"
            linkTo="/"
            active={this.props.currentPage === '/'}
          />
        </div>
      </div>
    )
  }
}

TopNav.propTypes = propTypes

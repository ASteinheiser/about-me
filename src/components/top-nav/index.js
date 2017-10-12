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
            text="About"
            linkTo="/about"
            active={this.props.currentPage === '/about'}
          />
          <TopNavTab
            text="Projects"
            linkTo="/"
            active={this.props.currentPage === '/'}
          />
        </div>
      </div>
    )
  }
}

TopNav.propTypes = propTypes

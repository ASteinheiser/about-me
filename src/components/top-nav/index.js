import React, { PropTypes } from 'react'

import TopNavTab from '../top-nav-tab'

import styles from './styles.css'

const propTypes = {
  children: PropTypes.element.isRequired,
  currentPage: PropTypes.string.isRequired,
}

export default class TopNav extends React.Component {

  render() {
    return (
      <div className={[styles.content]}>

        <div className={[styles.topNavContainer]}>

          <TopNavTab
            text="about"
            linkTo="/about"
            active={this.props.currentPage === '/about'}
          />

          <TopNavTab
            text="read"
            linkTo="/"
            active={this.props.currentPage === '/'}
          />

        </div>

        {this.props.children}

      </div>
    )
  }
}

TopNav.propTypes = propTypes

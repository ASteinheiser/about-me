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
      <div className={[styles.bodyWidth]}>
        <div className={[styles.topNavContainer]}>
          <TopNavTab
            text="About"
            linkTo="/"
            active={this.props.currentPage === '/'}
          />
          <TopNavTab
            text="Projects"
            linkTo="/projects"
            active={this.props.currentPage === '/projects'}
          />
          <TopNavTab
            text="Guides"
            linkTo="/guides"
            active={this.props.currentPage === '/guides'}
          />
        </div>
        {this.props.children}
      </div>
    )
  }
}

TopNav.propTypes = propTypes

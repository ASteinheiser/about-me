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
            text="Blog"
            linkTo="/blog"
            active={this.props.currentPage === '/blog'}
          />
          <TopNavTab
            text="Resume"
            linkTo="/resume"
            active={this.props.currentPage === '/resume'}
          />
        </div>
        {this.props.children}
      </div>
    )
  }
}

TopNav.propTypes = propTypes

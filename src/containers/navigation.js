import React, { PropTypes } from 'react'

import TopNav from '../components/top-nav'

import styles from './styles.css'

const propTypes = {
  children: PropTypes.element.isRequired,
}

export default class Navigation extends React.Component {
  render() {
    return (
      <div className={[styles.window]}>

        <TopNav currentPage={window.location.pathname}>
          {this.props.children}
        </TopNav>

      </div>
    )
  }
}

Navigation.propTypes = propTypes

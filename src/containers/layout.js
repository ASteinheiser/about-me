import React, { PropTypes } from 'react'

import SocialLinks from '../components/social-links'
import TopNav from '../components/top-nav'

import styles from './styles.css'

const propTypes = {
  children: PropTypes.element.isRequired,
}

export default class App extends React.Component {
  render() {
    return (
      <div className={[styles.fullWindow]}>

        <div className={[styles.sidebar]}>

          <SocialLinks />

        </div>

        <div className={[styles.content]}>

          <TopNav currentPage={window.location.pathname}>

            <div className={[styles.marginLeft]}>

              {this.props.children}

            </div>

          </TopNav>

        </div>
      </div>
    )
  }
}

App.propTypes = propTypes

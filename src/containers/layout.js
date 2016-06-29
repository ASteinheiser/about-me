import React, { PropTypes } from 'react'
import AboutSection from '../components/AboutSection/index'
import ProfileImage from '../components/ProfileImage/index'
import TopNav from '../components/TopNav/index'

import styles from './styles.css'

const propTypes = {
  children: PropTypes.element.isRequired,
}

export default class App extends React.Component {
  render() {
    return (
      <div className={[styles.fullWindow]}>
        <div className={[styles.sidebar]}>
          <ProfileImage />
          <AboutSection />
        </div>
        <div className={[styles.content]}>
          <div className={[styles.contentFrame]}>
            <TopNav currentPage={window.location.pathname}>
              {this.props.children}
            </TopNav>
          </div>
        </div>
      </div>
    )
  }
}

App.propTypes = propTypes

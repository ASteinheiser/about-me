import React, { PropTypes } from 'react'
import SidebarInfo from '../components/sidebar-info'
import ProfileImage from '../components/profile-image'
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
          <ProfileImage />
          <SidebarInfo />
        </div>
        <div className={[styles.content]}>
          <div className={[styles.contentFrame]}>
            <TopNav currentPage={window.location.pathname}>
              <div className={[styles.marginLeft]}>
                {this.props.children}
              </div>
            </TopNav>
          </div>
        </div>
      </div>
    )
  }
}

App.propTypes = propTypes

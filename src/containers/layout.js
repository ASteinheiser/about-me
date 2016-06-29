import React, { PropTypes } from 'react'
import SidebarInfo from '../components/SidebarInfo'
import ProfileImage from '../components/ProfileImage'
import TopNav from '../components/TopNav'

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
              {this.props.children}
            </TopNav>
          </div>
        </div>
      </div>
    )
  }
}

App.propTypes = propTypes

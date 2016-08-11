import React, { PropTypes } from 'react'
import SocialLinks from '../components/social-links'
import StyledText from '../components/styled-text'
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

          <StyledText
            text="I AM ANDREW"
            color="pearl"
            size="large"
            bold
            className={[styles.Title]}
          />

          <SocialLinks />

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

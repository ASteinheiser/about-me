import React from 'react'
import Description from '../components/Description/index'
import TopNav from '../components/TopNav/index'

import styles from './styles.css'

export default class Home extends React.Component {
  render() {
    return (
      <div className={[styles.contentFrame]}>
        <TopNav>
          <Description />
        </TopNav>
      </div>
    )
  }
}

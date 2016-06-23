import React from 'react'
import Description from '../components/Description/index'

import styles from './styles.css'

export default class Home extends React.Component {
  render() {
    return (
      <div className={[styles.contentFrame]}>
        <div className={[styles.hiddenScrollbar]}>
          <Description />
        </div>
      </div>
    )
  }
}

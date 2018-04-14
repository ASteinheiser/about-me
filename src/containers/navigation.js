import React from 'react';

import TopNav from '../components/top-nav';
import styles from './styles.css';

export default class Navigation extends React.Component {
  render() {
    return (
      <div className={[styles.window]}>

        <TopNav currentPage={window.location.pathname}/>

        <div className={[styles.content]}>
          {this.props.children}
        </div>
      </div>
    )
  }
}

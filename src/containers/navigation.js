import React, { PropTypes } from 'react'

import TopNav from '../components/top-nav'

import styles from './styles.css'

const propTypes = {
  children: PropTypes.element.isRequired,
}
// https://static.pexels.com/photos/160107/pexels-photo-160107.jpeg
// https://images.pexels.com/photos/79290/black-and-white-code-programming-tech-79290.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb
// https://images.pexels.com/photos/92904/pexels-photo-92904.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb
// https://images.pexels.com/photos/214221/pexels-photo-214221.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb
// https://images.pexels.com/photos/48606/pexels-photo-48606.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb
// https://images.pexels.com/photos/34578/pexels-photo.jpg?w=1260&h=750&auto=compress&cs=tinysrgb
// https://images.pexels.com/photos/34580/pexels-photo.jpg?w=1260&h=750&auto=compress&cs=tinysrgb
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

Navigation.propTypes = propTypes

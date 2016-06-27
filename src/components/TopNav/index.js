import React, { PropTypes } from 'react'
import TopNavTab from '../TopNavTab/index'

import styles from './styles.css'

const propTypes = {
  children: PropTypes.element.isRequired,
}

export default class TopNav extends React.Component {

  componentWillMount() {
    console.log(window.location)
  }

  render() {
    return (
      <div>
        <div className={[styles.topNavContainer]}>
          <TopNavTab text="Home" linkTo="/" active />
          <TopNavTab text="Projects" linkTo="/projects" active={false} />
          <TopNavTab text="Guides" linkTo="/guides" active={false} />
        </div>
        {this.props.children}
      </div>
    )
  }
}

TopNav.propTypes = propTypes

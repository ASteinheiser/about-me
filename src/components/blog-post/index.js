import React, { PropTypes } from 'react'
import classnames from 'classnames'

import StyledText from '../styled-text'

import styles from './styles.css'

const propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
}

export default class BlogPost extends React.Component {
  render() {
    return (
      <a href={this.props.link} className={[styles.blogContainer]} target="_blank">
        <img src={this.props.image} className={[styles.image]}/>

        <div className={[styles.text]}>
          <StyledText
            text={this.props.title}
            size="regular"
            color="pearl"
          />
        </div>
      </a>
    )
  }
}

BlogPost.PropTypes = propTypes

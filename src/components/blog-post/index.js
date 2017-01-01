import React, { PropTypes } from 'react'

import StyledText from '../styled-text'

import styles from './styles.css'

const propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
}

export default class BlogPost extends React.Component {

  render() {
    return (
      <div className={[styles.blogContainer]}>

        <StyledText
          text={this.props.title}
          size="large"
          color="pearl"
        />

        <br />
        <br />

        <StyledText
          text={this.props.body}
          size="regular"
          color="white"
        />

      </div>
    )
  }
}

BlogPost.PropTypes = propTypes

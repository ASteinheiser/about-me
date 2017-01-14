import React, { PropTypes } from 'react'

import StyledText from '../styled-text'

import styles from './styles.css'

const propTypes = {
  body: PropTypes.string.isRequired,
}

export default class BlogContent extends React.Component {

  render() {
    return (
      <div className={[styles.padding]}>

        <br />

        <span className={[styles.hyphens]}>
          <StyledText
            text={this.props.body}
            size="regular"
            color="white"
          />
        </span>

      </div>
    )
  }
}

BlogContent.PropTypes = propTypes

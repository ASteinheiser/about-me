import React, { PropTypes } from 'react'

import StyledText from '../styled-text'

const propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
}

export default class BlogPost extends React.Component {

  render() {
    return (
      <div>
        <StyledText
          text={this.props.title}
          size="large"
          color="white"
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

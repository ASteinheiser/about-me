import React, { PropTypes } from 'react'

const propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
}

export default class BlogContent extends React.Component {

  render() {
    return (
      <span>

          {this.props.title}
          {this.props.body}

      </span>
    )
  }
}

BlogContent.PropTypes = propTypes

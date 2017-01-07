import React, { PropTypes } from 'react'

import BlogContent from '../blog-content'

import styles from './styles.css'

const propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
}

export default class BlogPost extends React.Component {

  constructor(props) {
    super(props)
    this.state = { childVisible: false }
    this.onClick = this.onClick.bind(this)
  }

  onClick() {
    this.setState({ childVisible: !this.state.childVisible })
  }

  render() {
    return (
      <div className={[styles.blogContainer]}>
        <div onClick={this.onClick}>
          Parent - click me to show/hide my child
        </div>
        {
          this.state.childVisible
            ? <BlogContent title={this.props.title} body={this.props.body} />
            : null
        }
      </div>
    )
  }
}

BlogPost.PropTypes = propTypes

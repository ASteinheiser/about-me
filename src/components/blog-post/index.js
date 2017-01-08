import React, { PropTypes } from 'react'
import classnames from 'classnames'

import BlogContent from '../blog-content'
import StyledText from '../styled-text'

import styles from './styles.css'

const propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
}

export default class BlogPost extends React.Component {

  constructor(props) {
    super(props)

    this.state = { childVisible: false }
    this.state = { chevron: 'fa fa-chevron-right' }

    this.onClick = this.onClick.bind(this)
  }

  onClick() {
    this.setState({ childVisible: !this.state.childVisible })

    if (this.state.chevron === 'fa fa-chevron-right') {
      this.setState({ chevron: 'fa fa-chevron-down' })
    } else {
      this.setState({ chevron: 'fa fa-chevron-right' })
    }
  }

  render() {
    const classes = classnames(
      this.state.chevron,
      styles.button,
      { [`${styles.paddingLeft}`]: this.state.chevron === 'fa fa-chevron-right' }
    )

    return (
      <div className={[styles.blogContainer]}>

        <div className={styles.heading} onClick={this.onClick}>

          <i className={classes} />

          <StyledText
            text={this.props.title}
            size="large"
            color="pearl"
          />

        </div>

        {this.state.childVisible ? <BlogContent body={this.props.body} /> : null}

      </div>
    )
  }
}

BlogPost.PropTypes = propTypes

import React from 'react'

import StyledText from '../components/styled-text'
import BlogPost from '../components/blog-post'

import styles from './styles.css'

export default class Blog extends React.Component {
  render() {
    return (
      <div className={[styles.innerWidth]}>
        <br />

        <StyledText
          text="Blog"
          size="large"
          color="blue"
        />

        <br />
        <br />

        <BlogPost
          title="Coming Soon..."
          body="Recent projects, new tech, etc."
        />

      </div>
    )
  }
}

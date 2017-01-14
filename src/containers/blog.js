import React from 'react'

import StyledText from '../components/styled-text'
import BlogPost from '../components/blog-post'

import post from '../components/blog-post/posts/example.js'

import styles from './styles.css'

export default class Blog extends React.Component {
  render() {
    return (
      <div className={[styles.innerWidth]}>
        <br />

        <span className={[styles.paddingLeft]}>
          <StyledText
            text="Recent projects, new tech, etc."
            size="large"
            color="blue"
          />
        </span>

        <br />
        <br />

        <BlogPost
          title={post.title}
          body={post.body}
        />

        <BlogPost
          title={post.title}
          body={post.body}
        />

        <br />
        <br />

      </div>
    )
  }
}

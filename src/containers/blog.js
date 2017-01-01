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
          text="Discuss anything tech related..."
          size="large"
          color="blue"
        />
        <br />
        <br />
        <BlogPost
          title="Hello World"
          body="This is a hello world blog post... Hello world... This is a hello world blog post... Hello world... This is a hello world blog post... Hello world..."
        />
        <BlogPost
          title="Hello World"
          body="This is a hello world blog post... Hello world..."
        />
        <BlogPost
          title="Hello World"
          body="This is a hello world blog post... Hello world..."
        />
      </div>
    )
  }
}

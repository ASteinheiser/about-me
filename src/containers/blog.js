import React from 'react'
import StyledText from '../components/styled-text'
import BlogPost from '../components/blog-post'

export default class Blog extends React.Component {
  render() {
    return (
      <div>
        <StyledText
          text="Blog coming soon..."
          size="large"
          color="white"
        />
        <br />
        <br />
        <BlogPost
          title="Hello World"
          body="This is a hello world blog post... Hello world..."
        />
      </div>
    )
  }
}

import React from 'react'

import StyledText from '../components/styled-text'
import BlogPost from '../components/blog-post'

import styles from './styles.css'

export default class Blog extends React.Component {
  render() {
    return (
      <div className={[styles.blogHeader]}>
        <StyledText
          text="Latest projects, new tech, etc..."
          size="large"
          color="blue"
        />
        <div className={[styles.blogBody]}>
          <BlogPost
            title="hello world"
            image="http://www.sandiego-tech.com/wp-content/uploads/2016/09/tech3.jpg"
            link="http://www.google.com"
          />
          <BlogPost
            title="hello world"
            image="http://www.sandiego-tech.com/wp-content/uploads/2016/09/tech3.jpg"
            link="http://www.google.com"
          />
          <BlogPost
            title="hello world"
            image="http://www.sandiego-tech.com/wp-content/uploads/2016/09/tech3.jpg"
            link="http://www.google.com"
          />
          <BlogPost
            title="hello world"
            image="http://www.sandiego-tech.com/wp-content/uploads/2016/09/tech3.jpg"
            link="http://www.google.com"
          />
          <BlogPost
            title="hello world"
            image="http://www.sandiego-tech.com/wp-content/uploads/2016/09/tech3.jpg"
            link="http://www.google.com"
          />
          <BlogPost
            title="hello world"
            image="http://www.sandiego-tech.com/wp-content/uploads/2016/09/tech3.jpg"
            link="http://www.google.com"
          />
          <BlogPost
            title="hello world"
            image="http://www.sandiego-tech.com/wp-content/uploads/2016/09/tech3.jpg"
            link="http://www.google.com"
          />
          <BlogPost
            title="hello world"
            image="http://www.sandiego-tech.com/wp-content/uploads/2016/09/tech3.jpg"
            link="http://www.google.com"
          />
        </div>
      </div>
    )
  }
}

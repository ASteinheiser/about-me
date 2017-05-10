import _ from 'lodash'
import React from 'react'

import BlogPost from '../components/blog-post'
import posts from '../config/blog-posts.json'

import styles from './styles.css'

export default class Blog extends React.Component {
  render() {

    const blogPosts = _.map(posts, post => <BlogPost title={post.title} image={post.image} link={post.link}/>)

    return (
      <div className={[styles.blogBody]}>
        {blogPosts}
      </div>
    )
  }
}

import _     from 'lodash';
import React from 'react';

import BlogPost from '../components/blog-post';
import posts    from '../config/blog-posts.json';
import styles   from './styles.css';

export default class Projects extends React.Component {
  render() {
    const blogPosts = _.map(posts, post =>
      <BlogPost
        key={post.id}
        title={post.title}
        image={post.image}
        link={post.link} />
    );
    blogPosts.reverse();

    return (
      <div className={[styles.blogBody]}>
        {blogPosts}
      </div>
    )
  }
}

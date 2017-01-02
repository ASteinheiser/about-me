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
          text="Recent projects, new tech, etc."
          size="large"
          color="blue"
        />

        <br />
        <br />

        <BlogPost
          title="Example Post"
          body="Spicy jalapeno bacon ipsum dolor amet pork dolore t-bone ea occaecat pariatur id ex cupim ut kevin sunt. Eiusmod t-bone ex flank shankle tenderloin. Beef cillum eu landjaeger. Tail meatball pastrami andouille do. Proident duis spare ribs enim magna prosciutto ea kevin pig strip steak. Kevin spare ribs alcatra labore eu. Ex picanha ipsum, turducken pork chop quis laboris. Do quis pancetta nostrud officia voluptate. Enim pancetta culpa consequat ham dolore ea. Tri-tip duis do sed ipsum jerky picanha. Consequat ex cupidatat, andouille aute t-bone sunt ipsum porchetta capicola adipisicing aliqua id. Pork chop velit nostrud enim est laborum bacon minim."
        />

        <BlogPost
          title="Hello World"
          body="This is a hello world blog post... Hello world..."
        />
      </div>
    )
  }
}

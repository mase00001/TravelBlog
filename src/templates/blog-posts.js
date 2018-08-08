import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import styled from 'styled-components'

import './blog_post.css'

export default function Template({data}) {
  const post = data.markdownRemark
  return (
    <div style={{
      margin: '0 auto',
      maxWidth: '2000px',
    }}>
<HeaderWrapper>
      <Img style={{

        left: 0,
        top: 0,
        width: '100%',
        height: '100%',
      }}
        sizes={post.frontmatter.featuredImage.childImageSharp.sizes} />
    </HeaderWrapper>
    <div style={{
      width: '60%',
      margin: 'auto',

    }}>
      <Link activeStyle={{
        color:'black',
      }} to="/blog">Go Back</Link>

      <h1>{post.frontmatter.title}</h1>
      <h4>Posted by {post.frontmatter.author} on {post.frontmatter.date}</h4>
      <div dangerouslySetInnerHTML = {{ __html: post.html }} />
    </div>
    </div>
  )
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        author
        date
        featuredImage {
          childImageSharp {
            sizes(maxWidth:2000) {
              ...GatsbyImageSharpSizes
            }
      }
    }
  }
}
}
`

const HeaderWrapper = styled.div`
    height: 60vh;
    overflow: hidden;
  `

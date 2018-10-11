import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'
import Menu from '../components/menu/menu.js'

import './blog_post.css'

export default function Template({data}) {
  const post = data.markdownRemark
  return (
    <div>
    <div className="header-wrapper">
      <Menu/>
      <Img style={{
          left: 0,
          top: 0,
          width: '100%',
          height: '100%'
        }} sizes={post.frontmatter.featuredImage.childImageSharp.sizes}/>
    </div>
    <div className="container-content">

      <h1>{post.frontmatter.title}</h1>
      <Description>Posted by {post.frontmatter.author} on {post.frontmatter.date}</Description>
      <div dangerouslySetInnerHTML={{
          __html: post.html
        }}/>
    </div>
  </div>)
}

export const postQuery = graphql `
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
            sizes(maxWidth:4000) {
              ...GatsbyImageSharpSizes
            }
      }
    }
  }
}
}
`

const HeaderWrapper = styled.div `
    height: 600px;
    overflow: hidden;
    
  `

const Description = styled.h4 `
  font-family: Roboto;
  opacity: 0.7;
`

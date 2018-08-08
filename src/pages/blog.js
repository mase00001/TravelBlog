import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

const BlogPage = ({data}) => (
  <div>
    <h1 style={{
      textAlign: 'center',
      marginBottom:'100px',
    }}>San & Dan Blog Posts</h1>
    <div style={{
      display: 'flex',
      justifyContent: 'space-evenly',
    }}>
    {data.allMarkdownRemark.edges.map(post => (
      <div key={ post.node.id}>
        <h3>{post.node.frontmatter.title}</h3>
        <Img sizes={post.node.frontmatter.featuredImage.childImageSharp.sizes} />
        <small>Posted by {post.node.frontmatter.author} on {post.node.frontmatter.date}</small>
        <br />
        <br />
        <Link to={post.node.frontmatter.path} style={{color:'black'}}>Read More</Link>
        <br />
        <br />
      </div>
    ))}
  </div>
  </div>
)

export const pageQuery = graphql`
  query BlogIndexQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            path
            title
            date
            author
            featuredImage {
              childImageSharp {
                sizes(maxWidth:400) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }
      }
    }
  }`
  export default BlogPage

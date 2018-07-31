import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

const BlognPage = ({data}) => (
  <div>
    <h1>Blog Page!!</h1>
    {data.allMarkdownRemark.edges.map(post => (
      <div key={ post.node.id}>
        <h3>{post.node.frontmatter.title}</h3>
        <small>Posted by {post.node.frontmatter.author} on {post.node.frontmatter.date}</small>
        <br />
        <br />
        <Link to={post.node.frontmatter.path} style={{color:'black'}}>Read More</Link>
        <br />
        <br />
      </div>
    ))}
  </div>
)

  export default BlognPage

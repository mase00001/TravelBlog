import React from 'react'
import Link from 'gatsby-link'
import styles from './index-css-modules.module.css'

import Header from '../components/header/header.js'
import About from '../components/about/about.js'
import Featured from '../components/featured/featured.js'


import Background from '../img/pic.jpg'
import Background2 from '../img/greece.jpg'


const IndexPage = ({data}) => (
<div className={styles.scrollContain}>
  <Header back={Background}><h1 style={{
    zIndex: 1,
    margin: 'auto',
    padding: 18,

    borderWidth: 5,
    borderRadius: 2,
    fontFamily: 'Pacifico, cursive',
    color: 'white',
    fontSize: 80,
  }}>San & Dan Travel Blog</h1></Header>
  <About />
  <Header back={Background2} id='feature'>
    <Featured />
  </Header>


  {/*<div style={{
    display: 'flex',
  }}>
    {data.allMarkdownRemark.edges.map(post => (
      <div key={ post.node.id} style={{
        margin: 10,
      }}>
        <h3>{post.node.frontmatter.title}</h3>
        <small>Posted by {post.node.frontmatter.author} on {post.node.frontmatter.date}</small>
        <br />
        <br />
        <Link to={post.node.frontmatter.path} style={{color:'black'}}>Read More</Link>
        <br />
        <br />
      </div>
    ))}
  </div>*/}
</div>
)

export const pageQuery = graphql`
  query BlogNewIndexQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            path
            title
            date
            author
          }
        }
      }
    }
  }`

export default IndexPage

import React from 'react'
import Link from 'gatsby-link'
import styles from './index-css-modules.module.css'
import styled from 'styled-components'

import Header from '../components/header/header.js'
import About from '../components/about/about.js'
import Featured from '../components/featured/featured.js'
import Menu from '../components/menu/menu.js'

import Background from '../img/pic.jpg'
import Background2 from '../img/greece.jpg'


const IndexPage = ({data}) => (
<div className={styles.scrollContain}>
  <Menu />
  <Header back={Background}><h1 style={{
    zIndex: 1,
    margin: 'auto',
    padding: 18,
    fontFamily: 'Pacifico, cursive',
    color: 'white',
    fontSize: 80,
  }}>San n Dan Travel Blog</h1></Header>
  <About />
  <Header back={Background2} id='feature'>
    <Featured />
  </Header>

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

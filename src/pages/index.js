import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import styles from './index-css-modules.module.css'
import styled from 'styled-components'
import AnchorLink from 'react-anchor-link-smooth-scroll'

import Header from '../components/header/header.js'
import About from '../components/about/about.js'
import Featured from '../components/featured/featured.js'
import Menu from '../components/menu/menu.js'

import BlogPage from './blog.js'

import Background from '../img/pic2.jpg'
import Background2 from '../img/greece.jpg'
import { GoCalendar } from 'react-icons/go'
import { FaUser } from 'react-icons/fa'

const IndexPage = ({data}) => (
<div>

  <Header back={Background}>
    <Wrapper>
      <Small>Follow the travels of:</Small>
      <Title>San <Word>`N</Word> Dan</Title>
    </Wrapper>
  <AnchorLink href="#about">
    <AutoScrollDown />
  </AnchorLink>
  </Header>


  <Container id='about'>
    {data.allMarkdownRemark.edges.map(post => (
    <Link to={post.node.frontmatter.path}>
      <Bucket className={styles.zoom} key={post.node.id}>
        <Image>
          <Zoom  className="zoomer">
            <Img sizes={post.node.frontmatter.featuredImage.childImageSharp.sizes} />
          </Zoom>
        </Image>
      <Description>
        <BlogTitle className="zed">{post.node.frontmatter.title}</BlogTitle>
        <br />
        <small><DateTitle><FaUser /> {post.node.frontmatter.author}</DateTitle> <AuthorTitle><GoCalendar /> {post.node.frontmatter.date}</AuthorTitle></small>
        <br />
        <br />
        <p style={{color:'black'}}>{post.node.excerpt}</p>
      </Description>
    </Bucket>
    <br />
    <br />
    </Link>
    ))}
  </Container>


</div>

)

export const pageQuery = graphql`
  query BlogNewIndexQuery {
    allMarkdownRemark (sort: {fields: [frontmatter___date], order: DESC}) {
      edges {
        node {
          id
          excerpt
          frontmatter {
            path
            title
            date
            author
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
    }
  }`

export default IndexPage

const Small = styled.h2`
  font-family: "Trebuchet MS", sans-serif;
  color: white;
  text-align: center;
  font-size: 12px;
  margin: 0px;
`

const Title = styled.h1`
  font-family: "Trebuchet MS", sans-serif;
  color: white;
  font-size: 80px;
`

const BlogTitle = styled.h1`
  font-family: Trebuchet MS,sans-serif;
  font-size: 40px;
  margin: 0;
  &:hover {
    font-weight: bold;
  }
`

const Wrapper = styled.div`
  margin: 300px auto;
  z-index: 1;
  color: white;

`

const Word = styled.span`
  font-size: 80px;
  color: #6695e2;
`

const DateTitle = styled.span`
  font-family: Oswald,Tahoma,Geneva,sans-serif;
  text-transform: uppercase;
  color: #6695e2;
`

const AuthorTitle = styled.span`
  font-family: Oswald,Tahoma,Geneva,sans-serif;
  text-transform: uppercase;
  color: #6695e2;
`

const Container = styled.div`
  padding-top: 80px;
  height: 100vh;
  display: flex;
  margin: 0 auto;
  flex-flow: wrap;
  justify-content: space-around;
  max-width: 60%;

`

const Bucket = styled.div`
  position: relative;
  width: 700px;
  margin: 0 auto;
  transition: all 0.8s ease;
  border-radius: 10px;
  z-index: 2;
  &:hover {
    color: #6695e2;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }

  &:hover .zoomer {
    transform: scale(1.2);
    transition: all 0.8s ease;
  }

  &:before {
    position: absolute;
    height: 0px;
    bottom: -20px;
    transition: all 0.8s ease;
    display: block;
    width: 600px;
    content: "";
    border-top: 1px solid #ecebea;
    z-index: 2;
  }

  &:hover:before {
      transform: translateY(10px);
      transition: all 0.3s ease;
  }
`

const Image = styled.div`
  border-radius: 10px;
  overflow: hidden;
  width: 700px;
  height: 320px;
`
const Zoom = styled.div`
  height: 100%;
  width: 100%;
  transition: all 0.8s ease;
`

const Description = styled.div`
  width: 100%;
  margin-left: 20px;
`

const AutoScrollDown = styled.a`
  position: absolute;
  bottom: 30px;
  left: 50%;
  margin-left: -16px;
  display: block;
  width: 50px;
  height: 50px;
  border: 2px solid #6695e2;
  background-color: #6695e2;
  background-size: 14px auto;
  border-radius: 50%;
  z-index: 2;
  -webkit-animation: bounce 2s infinite 2s;
  animation: bounce 2s infinite 2s;
  -webkit-transition: all .2s ease-in;
  transition: all .2s ease-in;
  transform: scale(1);

&:before {
  position: absolute;
  top: calc(50% - 10px);
  left: calc(50% - 8px);
  transform: rotate(-45deg);
  display: block;
  width: 15px;
  height: 15px;
  content: "";
  border: 4px solid white;
  border-width: 0px 0 4px 4px;
}

@keyframes bounce {
  0%,
  100%,
  20%,
  50%,
  80% {
    -webkit-transform: translateY(0);
    -ms-transform: translateY(0);
    transform: translateY(0);
  }
  40% {
    -webkit-transform: translateY(-10px);
    -ms-transform: translateY(-10px);
    transform: translateY(-10px);
  }
  60% {
    -webkit-transform: translateY(-5px);
    -ms-transform: translateY(-5px);
    transform: translateY(-5px);
  }
}
`

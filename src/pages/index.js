import React from 'react'
import Link from 'gatsby-link'
import styles from './index-css-modules.module.css'

import Menu from '../components/menu.js'
import Header from '../components/header.js'

import Background from '../img/pic.jpg'


const IndexPage = () => (
<div style={{
  padding: 0,
  margin: 0,
}}>
  <Header><h1 style={{
    margin: 'auto',
    padding: 10,
    borderStyle: 'solid',
    borderWidth: 5,
    borderRadius: 2,
    fontFamily: 'Pacifico, cursive',
    color: 'white',
    fontSize: 50,
  }}>San & Dan Travel Blog</h1></Header>
</div>
)

export default IndexPage

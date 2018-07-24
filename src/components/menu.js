import React from 'react'
import Link from 'gatsby-link'

const Menu = () => (
  <div style={{
    position: 'absolute',
    width: '100%',
    height: 80,
    margin: 'auto',
    background: 'black',
  }}>
  <ul style={{
    display: 'flex',
    justifyContent: 'flex-end',
    listStyle: 'none',
    margin: 14,
  }}>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/blog">Blog</Link></li>
  </ul>
  </div>

)

export default Menu;

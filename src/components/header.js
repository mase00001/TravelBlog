import React from 'react'
import Link from 'gatsby-link'
import Background from '../img/pic.jpg'

const Header = ({ children }) => (
  <div
    style={{
      display: 'flex',
      padding: 0,
      margin: 0,
      minHeight: '500px',
      backgroundSize: 'cover',
      backgroundImage: `url(${Background})`,
      backgroundRepeat: 'no-repeat',

    }}
  >{children}</div>
)

export default Header

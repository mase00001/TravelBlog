import React from 'react'
import Link from 'gatsby-link'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import styled from 'styled-components'

import styles from './menu-blog-css-modules.module.css'

import Pic from '../../img/about.jpg'

class Menu extends React.Component {

  render() {
    return (
      <div className={styles.dark}>
          <Link className={styles.hello} to="/">
            <Cont><Avatar /><Mini>San <span style={{color:'#6695e2'}}>`N</span> Dan</Mini></Cont>
          </Link>
      </div>
    )
  }
}

export default Menu;

const Avatar = styled.div`
  margin: auto;
  width: 50px;
  height: 50px;
  display: block;
  background-image: url(${Pic});
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 50%;
  background-position: center;
`

const Cont = styled.div`
  position: absolute;
  width:200px;
  display: flex;
  justify-content: center;
  top: 50%;
  transform: translateY(-50%);
`

const Mini = styled.p`

  margin: auto;
  font-size: 22px;
  font-family: "Trebuchet MS", sans-serif;
`

const List = styled.li`
  padding-right: 20px;
  margin-bottom: 0px;
`

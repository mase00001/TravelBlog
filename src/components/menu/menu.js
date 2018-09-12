import React from 'react'
import Link from 'gatsby-link'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import styled from 'styled-components'

import styles from './menu-css-modules.module.css'

import Pic from '../../img/about.jpg'

class Menu extends React.Component {
    state = {
      isTop: true,
    };

    componentDidMount() {
      document.addEventListener('scroll', () => {
        const isTop = window.scrollY < 100;
        if (isTop !== this.state.isTop) {
          this.setState({ isTop })
        }
      });
    }

  render() {
    return (
      <div className={this.state.isTop ? styles.navMan : styles.navManb}>
          <Link className={this.state.isTop ? styles.hello1 : styles.hello} to="/">
            <Cont><Avatar /><Mini>San <span style={{color:'#6695e2'}}>`N</span> Dan</Mini></Cont>
          </Link>
        <ul className={styles.list}>
        {/*}  <List><Link className={this.state.isTop ? styles.hello1 : styles.hello} to="/">Home</Link></List>
          <List><Link className={this.state.isTop ? styles.hello1 : styles.hello} to="/about">About</Link></List>*/}
          <List><Link className={this.state.isTop ? styles.hello1 : styles.hello} to="/contact">Contact</Link></List>
      </ul>
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
  font-family: "Trebuchet MS";
`

const List = styled.li`

  margin-bottom: 0px;

  &:before {
    position: absolute;
    width: 100%;
    height: 0px;
    bottom: 0;
    left: 0;
    content: "";
    border-bottom: solid 2px #6695e2;
    transition: all 0.3s ease;
    transform: scaleX(0);
  }

  &:hover:before {
    transform: scaleX(1);
  }

`

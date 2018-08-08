import React from 'react'
import Link from 'gatsby-link'
import AnchorLink from 'react-anchor-link-smooth-scroll'

import styles from './menu-blog-css-modules.module.css'

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
      <ul className={styles.list}>
          <li><Link className={this.state.isTop ? styles.hello1 : styles.hello} to="/">HOME</Link></li>
          <li><Link className={this.state.isTop ? styles.hello1 : styles.hello} to="/blog">BLOG</Link></li>
          <li><AnchorLink className={this.state.isTop ? styles.hello1 : styles.hello} href="#feature">FEATURED STORY</AnchorLink></li>
          <li><AnchorLink className={this.state.isTop ? styles.hello1 : styles.hello} href="#about">ABOUT</AnchorLink></li>
      </ul>
      </div>
    )
  }
}

export default Menu;

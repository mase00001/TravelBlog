import React from 'react'
import styles from './header-css-modules.module.css'

const Header = props => (
  <div
    className={[styles.image, styles.layout, props.styles].join(' ')}
    id={props.id}
    style={{
      backgroundImage: `url(${props.back})`,
    }}
  >{props.children}<div className={styles.overlay}></div>
    </div>
)

export default Header

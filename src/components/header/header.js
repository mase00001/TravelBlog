import React from 'react'
import styles from './header-css-modules.module.css'

const Header = props => (
  <div
    className={[styles.image, styles.layout, props.styles].join(' ')}
    id={props.id}
    style={{
      backgroundImage: `url(${props.back})`,
    }}
  >{props.children}<div
    style={{
        width: '100%',
        height: '100%',
        position: 'absolute',
        background: 'black',
        opacity: 0.4,
      }}></div>
    </div>
)

export default Header

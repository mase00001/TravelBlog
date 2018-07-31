import React from 'react'
import styles from './aboutcomp-css-modules.module.css'

const About = () => (

  <div className={styles.layout} id='about'>
    <div className={styles.boxes}>
    <div className={[styles.box, styles.pic].join(' ')}
      style={{
      backgroundImage: `url('http://www.bravotv.com/sites/nbcubravotv/files/styles/blog-post--mobile/public/field_blog_image/2017/03/jet-set-beauty-beast-castles-promote-02.jpg?itok=H5ltr4BV&timestamp=1488570367')`,
      }}>
    </div>
    <div className={styles.box}>
      <p>
        Senserit quid commodo. O dolor duis ex senserit. De quae possumus. Ne quorum et
        cillum.Aut malis possumus ingeniis non ad ab veniam excepteur ea si amet
        arbitrantur an vidisse quorum duis ubi culpa, eiusmod imitarentur a ullamco,
        esse non pariatur, eram proident constias, nisi ex excepteur. Cernantur id quid
        vidisse ab incurreret eram an ullamco consectetur. Aute admodum exercitation,
        summis arbitror exquisitaque, ullamco graviterque nam expetendis, aute
        praesentibus singulis illum pariatur. Minim doctrina ut illustriora.
      </p>
    </div>
    </div>
  </div>

)

export default About

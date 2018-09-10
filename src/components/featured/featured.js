import React from 'react'
import Link from 'gatsby-link'
import CtaButton from '../ctaButton/ctaButton'
import styled from 'styled-components'

import styles from './featured-css-modules.module.css'

const Featured = () => (
  <div className={styles.layout}>
      <div className={styles.box}>
      <FeaturedHeader>Feature Story: Greece, Creta</FeaturedHeader>
      <p>
        Senserit quid commodo. O dolor duis ex senserit. De quae possumus. Ne quorum et
        cillum.Aut malis possumus ingeniis non ad ab veniam excepteur ea si amet
        arbitrantur an vidisse quorum duis ubi culpa, eiusmod imitarentur a ullamco,
        esse non pariatur, eram proident constias, nisi ex excepteur. Cernantur id quid
        vidisse ab incurreret eram an ullamco consectetur. Aute admodum exercitation,
        summis arbitror exquisitaque, ullamco graviterque nam expetendis, aute
        praesentibus singulis illum pariatur. Minim doctrina ut illustriora.
      </p>
      <CtaButton to='/post-one'>See Post</CtaButton>
    </div>
  </div>
)

export default Featured

const FeaturedHeader = styled.h1`
  color: #7fbc71;
    font-family: sans-serif;
`

import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import icon32 from '../img/favicon-32x32.png'


import './index.css'

class Layout extends React.Component {
  render() {
    const { data, children } = this.props

  return (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
      link={[
        { rel: 'shortcut icon', type: 'image/png', href: `${icon32}` }
      ]}
    />
    <div>
      {children()}
    </div>
  </div>
  )
  }
}

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`

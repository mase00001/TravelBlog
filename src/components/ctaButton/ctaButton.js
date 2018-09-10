
import React, { Component } from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

class ctaButton extends Component {
  render() {
    const { children } = this.props
    return (
      <Link style={{ border: 'none' }} to={this.props.to}>
        <ButtonContainer>{children}</ButtonContainer>
      </Link>
    )
  }
}

export default ctaButton

const ButtonContainer = styled.div`
  border: 1px solid white;
  border-radius: 3px;
  padding: 25px;
  font-size: 2rem;
  color: white;
  display: inline-block;
  transition: all 0.3s ease;
  font-family: sans-serif;
  &:hover {
    border-color: #7fbc71;
    background: #7fbc71;
  }
`

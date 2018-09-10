import React from 'react'
import styled from 'styled-components'

const Card = (props) => (
    <Bucket>{props.children}</Bucket>
)

export default Card

const Bucket = styled.div`
  width: 600px;
  height: 500px;
  margin: 20px auto;
  transition: all 0.3s ease;
  &:hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
`

const Background = styled.div`
  height: 50%;
  width: 100%;

`

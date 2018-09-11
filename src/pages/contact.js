import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import styles from './contact-css-modules.module.css'

import Menu1 from '../components/menu_blog/menu_blog.js'

const Contact = () => (
<div>
  <Menu1 />
  <Container>
    <h1>Contact</h1>
    <ContactForm
      name="contact"
      method="post"
      data-netlify="true"
      date-netlify-honeypot="bot-field"
    >
      <label>Name:</label><br />
      <input name="name" className={styles.control} />
      <br />
      <label>Email:</label><br />
      <input name="email" className={styles.control} />
      <br />
      <label>Message:</label><br />
      <textarea name="message" className={styles.control} rows='5' />
    </ContactForm>
    <Send>Send</Send>
  </Container>
  </div>
)

export default Contact

const ContactForm = styled.form`
  transition: all 4s ease-in-out;
  margin:0;
`

const Send = styled.button`
  background-color: #6695e2;
  font-family: sans-serif;
  font-size: 18px;
  color: white;
  border-radius: 5px;
  border-style: none;
  padding: 5px 15px;
  transition: all 0.5s ease;
  &:hover {
    opacity: 0.8;
  }
`
const Container = styled.div`
  margin:auto;
  padding-top: 120px;
  height: 100vh;
  width: 50%;
`

import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import styles from './contact-css-modules.module.css'

const Contact = () => (
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
    <br />
    <button>Send</button>
  </Container>
)

export default Contact

const ContactForm = styled.form`
  transition: all 4s ease-in-out;
`

const Container = styled.div`
  padding-top: 80px;
  height: 100vh;
  margin: 0 auto;
  max-width: 60%;

`

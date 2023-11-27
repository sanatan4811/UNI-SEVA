import React from 'react'

import { Helmet } from 'react-helmet'

import './about.css'

const About = (props) => {
  return (
    <div className="about-container">
      <Helmet>
        <title>about - Courteous Firm Reindeer</title>
        <meta property="og:title" content="about - Courteous Firm Reindeer" />
      </Helmet>
      <h1 className="about-text">सेवा परमो धर्मः</h1>
      <iframe
        src="https://www.youtube.com/embed/U80_3J_42u8?si=aoJo0iFfZGxnJBhw"
        className="about-iframe"
      ></iframe>
    </div>
  )
}

export default About

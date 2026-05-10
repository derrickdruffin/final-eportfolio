// Home.jsx
// Landing page component that loads content from home.json

import React from 'react'
import homeData from '../data/home.json'

function Home(props) {
  // Greeting function using template literals
  function greetVisitor(name) {
    return 'Welcome to my ePortfolio, ' + name + '! Thanks for stopping by.'
  }

  return (
    <main>
      <article>
        {/* Page title loaded from JSON */}
        <h2>{homeData.title}</h2>
        {/* Dynamic greeting message */}
        <p>{greetVisitor('Visitor')}</p>
        {/* Intro and description loaded from JSON */}
        <p>{homeData.intro}</p>
        <p>{homeData.description}</p>
        {/* Link to About page */}
        <p><a href="#" onClick={function(e) { e.preventDefault(); props.setActivePage('about') }}>{homeData.learnMore}</a></p>
      </article>
    </main>
  )
}

export default Home
// App.jsx
// Main application component that handles page routing and renders layout

import React, { useState } from 'react'
import Header from './components/layout/Header'
import Nav from './components/layout/Nav'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Resume from './pages/Resume'
import Contact from './pages/Contact'
import './App.css'

function App() {
  // activePage controls which page component is rendered
  const [activePage, setActivePage] = useState('home')

  // renderPage returns the correct page component based on activePage state
  function renderPage() {
    if (activePage === 'home') { return <Home setActivePage={setActivePage} /> }
    if (activePage === 'about') { return <About /> }
    if (activePage === 'skills') { return <Skills /> }
    if (activePage === 'projects') { return <Projects /> }
    if (activePage === 'resume') { return <Resume /> }
    if (activePage === 'contact') { return <Contact /> }
    return null
  }

  return (
    <div className="app">
      {/* Header contains the site title and main navigation */}
      <Header>
        <Nav activePage={activePage} setActivePage={setActivePage} />
      </Header>
      {/* Render the active page component */}
      {renderPage()}
      {/* Footer contains secondary navigation and copyright */}
      <Footer activePage={activePage} setActivePage={setActivePage} />
    </div>
  )
}

export default App
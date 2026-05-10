import React from 'react'

const links = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About Me' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'resume', label: 'Resume' },
  { id: 'contact', label: 'Contact Me' },
]

function Navbar(props) {
  return (
    <header>
      <h1>Derrick Dewayne Ruffin</h1>
      <nav aria-label="Main navigation">
        <ul>
          {links.map(function(link) {
            const isActive = props.activePage === link.id
            return (
              <li key={link.id}>
                <a href="#" className={isActive ? 'active' : ''} onClick={function(e) { e.preventDefault(); props.setActivePage(link.id) }}>{link.label}</a>
              </li>
            )
          })}
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
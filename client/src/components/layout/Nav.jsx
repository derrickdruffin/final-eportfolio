// Nav.jsx
// Main navigation component with active page highlighting

import React from 'react'

// Navigation links for all pages
const links = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About Me' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'resume', label: 'Resume' },
  { id: 'contact', label: 'Contact Me' },
]

function Nav(props) {
  return (
    <nav aria-label="Main navigation">
      <ul>
        {links.map(function(link) {
          return (
            <li key={link.id}>
              <a href="#" className={props.activePage === link.id ? 'active' : ''} aria-current={props.activePage === link.id ? 'page' : undefined} onClick={function(e) { e.preventDefault(); props.setActivePage(link.id) }}>{link.label}</a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Nav
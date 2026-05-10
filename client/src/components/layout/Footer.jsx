// Footer.jsx
// Footer component with secondary navigation and copyright

import React from 'react'

// Footer navigation links
const links = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About Me' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'resume', label: 'Resume' },
  { id: 'contact', label: 'Contact Me' },
]

function Footer(props) {
  return (
    <footer>
      <nav aria-label="Footer navigation">
        <ul>
          {links.map(function(link) {
            return (
              <li key={link.id}>
                <a href="#" className={props.activePage === link.id ? 'active' : ''} onClick={function(e) { e.preventDefault(); props.setActivePage(link.id) }}>{link.label}</a>
              </li>
            )
          })}
        </ul>
      </nav>
      <p>&copy; 2024 Derrick Dewayne Ruffin | ePortfolio</p>
    </footer>
  )
}

export default Footer
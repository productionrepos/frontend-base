import React from 'react'
import propTypes from 'prop-types'

import './Dropdown.css'

import { Dropdown, Container } from 'react-bootstrap'

function RedDropdown({ items, label }) {
  if (!items || items.length < 0) {
    items = [
      {
        href: '#/action-1',
        href_label: 'Action'
      },
      {
        href: '#/action-2',
        href_label: 'Action2'
      },
      {
        href: '#/action-3',
        href_label: 'Action3'
      }
    ]
  }
  return (
    <Container style={{ width: '50%' }}>
      <Dropdown>
        <Dropdown.Toggle
          style={{ width: '100%', backgroundColor: '#EA4335', color: '#FFF' }}
          className="dropdown-label">
          {label || 'Danger'}
        </Dropdown.Toggle>

        <Dropdown.Menu
          className="dropdown-menu-display"
          style={{ width: '100%', backgroundColor: 'rgba(234, 67, 53, 0.7)' }}>
          {items.map(elemento => {
            return (
              <Dropdown.Item
                id="red-d-item"
                key={elemento.href}
                href={elemento.href}>
                {elemento.href_label}
              </Dropdown.Item>
            )
          })}
        </Dropdown.Menu>
      </Dropdown>
    </Container>
  )
}

RedDropdown.propTypes = {
  label: propTypes.string,
  items: propTypes.array
}

export default RedDropdown

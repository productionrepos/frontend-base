import propTypes from 'prop-types'
import React from 'react'
import { Container, Dropdown } from 'react-bootstrap'
import './Dropdown.css'

function BlackDropdown({ label, items }) {
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
          style={{ width: '100%', backgroundColor: '#272726', color: '#FFF' }}
          className="dropdown-label">
          {label || 'Warning'}
        </Dropdown.Toggle>

        <Dropdown.Menu
          className="dropdown-menu-display"
          style={{ width: '100%', backgroundColor: 'rgba(39, 39, 38, 0.7)' }}>
          {items.map(elemento => {
            return (
              <Dropdown.Item
                id="black-d-item"
                style={{}}
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

BlackDropdown.propTypes = {
  label: propTypes.string,
  items: propTypes.array
}

export default BlackDropdown

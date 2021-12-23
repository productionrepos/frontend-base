import React from 'react'
import propTypes from 'prop-types'
import './Navbar.css'

function BlackNavbar({ title, titleHref, items, dpItems }) {
  if (!items || items.length < 0) {
    items = [
      {
        href: '/',
        href_label: 'Home'
      },
      {
        href: '/',
        href_label: 'Features'
      },
      {
        href: '/',
        href_label: 'Pricing'
      },
      {
        href: '/',
        href_label: 'About'
      }
    ]
  }

  if (!dpItems || dpItems.length < 0) {
    dpItems = [
      {
        href: '/',
        href_label: 'Action'
      },
      {
        href: '/',
        href_label: 'Another Action'
      },
      {
        href: '/',
        href_label: 'Something Else'
      }
    ]
  }

  return (
    <nav
      style={{
        background: 'linear-gradient(180deg, #2C2C2C 0%, #2D403B 100%)'
      }}
      className="navbar navbar-expand-lg navbar-dark">
      <div className="container-fluid">
        <a className="navbar-brand name" href={titleHref || '/Navbars'}>
          {title || 'Navbar'}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarColor02"
          aria-controls="navbarColor02"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarColor02">
          <ul
            className="navbar-nav justify-content-end"
            style={{ width: '100%' }}>
            {items.map(elemento => {
              return (
                <li key={elemento.href_label} className="nav-item">
                  <a className="nav-link links" href={elemento.href}>
                    {elemento.href_label}
                    <span className="visually-hidden">(current)</span>
                  </a>
                </li>
              )
            })}
            <li className="nav-item dropdown ">
              <a
                className="nav-link dropdown-toggle links"
                data-bs-toggle="dropdown"
                href="/"
                role="button"
                aria-haspopup="true"
                aria-expanded="false">
                Dropdown
              </a>
              <div className="dropdown-menu black-dropdown-menu">
                {dpItems.map(elemento => {
                  return (
                    <a
                      key={elemento.href_label}
                      className="dropdown-item black-dropdown-item"
                      href={elemento.href}>
                      {elemento.href_label}
                    </a>
                  )
                })}
                <div className="dropdown-divider"></div>
                <a className="dropdown-item black-dropdown-item" href="/">
                  Separated link
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

BlackNavbar.propTypes = {
  title: propTypes.string,
  titleHref: propTypes.string,
  items: propTypes.array,
  dpItems: propTypes.array,
  separatedLink: propTypes.bool
}

export default BlackNavbar

import React from 'react'
import './Navbar.css'


export default function Test() {
    return (
  
      <nav style={{ background: 'linear-gradient(180deg, #2C2C2C 0%, #2D403B 100%)'}} className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand name" href="/">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarColor02">
            <ul className="navbar-nav justify-content-end" style={{width:'100%'}}>
              <li className="nav-item">
                <a className="nav-link links" href="/">Home
                  <span className="visually-hidden">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link links" href="/">Features</a>
              </li>
              <li className="nav-item">
                <a className="nav-link links" href="/">Pricing</a>
              </li>
              <li className="nav-item">
                <a className="nav-link links" href="/">About</a>
              </li>
              <li className="nav-item dropdown ">
                <a className="nav-link dropdown-toggle links" data-bs-toggle="dropdown" href="/" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="/">Action</a>
                  <a className="dropdown-item" href="/">Another action</a>
                  <a className="dropdown-item" href="/">Something else here</a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="/">Separated link</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
}

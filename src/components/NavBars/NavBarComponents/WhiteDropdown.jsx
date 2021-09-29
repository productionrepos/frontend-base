import React from 'react'
import './Navbar.css'
import { Navbar, Container,Nav,NavDropdown } from 'react-bootstrap'
export default function WhiteDropdown({links,items,text}) {
  let default_values =[
      {
          href:'#home',
          ref_text:'Home'
      },
      {
          href:'#link',
          ref_text:'Link'
      },
      {
          href:'#about',
          ref_text:'About'
      }
  ]
  let defaul_item_values = [
    {
        href:'#action/3.1',
        ref_text:'Action'
    },
    {
        href:'#action/3.2',
        ref_text:'Another action'
    },
    {
        href:'#action/3.3',
        ref_text:'Something'
    }
  ]
  if( !items || items.length < 1){
    items = defaul_item_values
  }
  if( !links || links.length < 1){
      links = default_values
  }
    return (
<>
        <style type="text/css">
            {`
                .bg-green {
                    background: linear-gradient(180deg, #009B78 0%, #357B6B 100%);
                    
                }
                
            `}
        </style>
        <Navbar bg="green" variant='dark'expand="lg">
            <Container>
                <Navbar.Brand   href="#home"><h1 className='nav-link'>{ text || 'Normal Dropdown'}</h1></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav  className="justify-content-end" style={{ width: "100%" }}>
                        {links.map( data => (
                            <Nav.Link id='link-test' style={{color:'white'}} key={data.href} href={data.href}>{data.ref_text}</Nav.Link>
                        ))}
                        <NavDropdown  title="Dropdown" id="basic-nav-dropdown">
                          {items.map(data => (
                              <NavDropdown.Item key={data.href} href={data.href}>{data.ref_text}</NavDropdown.Item>
                          ))}
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

        </>
    )
}

import React from 'react'
import { Navbar, Container,Nav,NavDropdown } from 'react-bootstrap'
import './Navbar.css'

export default function BlackHamburgeur({links,items,text}) {
    let default_link_values =[
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
    if( !links || links.length < 1){
        links = default_link_values
    }

    if( !items || items.length < 1){
        items = defaul_item_values
    }
    return (
        <>    
            <style type="text/css">
                {`
                    .bg-oscuro {
                        background: linear-gradient(180deg, #2C2C2C 0%, #2D403B 100%);
                        color: white;
                    }
                    
                `}
            </style>
            <Navbar bg="oscuro" variant='dark'expand="">
                <Container>
                    <Navbar.Brand  href="#home"><h1 className='nav-link'>{ text || 'Hamburguer Dropdown'}</h1></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav  className="justify-content-end" style={{ width: "100%" }}>
                            {links.map( data => (
                                <Nav.Link id='link-test' style={{color:'white'}} key={data.href} href={data.href}><h1 className='nav-link'>{data.ref_text}</h1></Nav.Link>
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

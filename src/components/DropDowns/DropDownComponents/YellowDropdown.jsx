import React from 'react'

import './Dropdown.css'

import {Dropdown, Container} from 'react-bootstrap'


export default function YellowDropdown({label,items}) {
    if (!items || items.length < 0){
        items = [
            {
                href:'#/action-1',
                href_label:'Action'
            },
            {
                href:'#/action-2',
                href_label:'Action2'
            },
            {
                href:'#/action-3',
                href_label:'Action3'
            }
        ]
    }
    return (
        <Container style={{width:'50%'}}> 
            <Dropdown >
            <Dropdown.Toggle style={{width:'100%',backgroundColor:'#FDD807',color:'#2C2C2C'}} className='dropdown-label'>
                { label || 'Secondary'}
            </Dropdown.Toggle>

            <Dropdown.Menu className='dropdown-menu-display' style={{width:'100%',backgroundColor:'rgba(253, 216, 7, 0.5)'}}>
                {
                    items.map( (elemento) => {
                        return (
                            <Dropdown.Item id="yellow-d-item" key={elemento.href} href={elemento.href}>{elemento.href_label}</Dropdown.Item>
                        )
                    })
                }

            </Dropdown.Menu>
            </Dropdown>
        </Container>
    )
}

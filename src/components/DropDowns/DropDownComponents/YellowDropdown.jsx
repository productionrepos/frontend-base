import React from 'react'

import './DropDown.css'

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
        <Container>
            <Dropdown >
            <Dropdown.Toggle style={{backgroundColor:'#FDD807',color:'#2C2C2C'}} className='dropdown-label'>
                { label || 'Secondary'}
            </Dropdown.Toggle>

            <Dropdown.Menu>
                {
                    items.map( (elemento) => {
                        return (
                            <Dropdown.Item key={elemento.href} href={elemento.href}>{elemento.href_label}</Dropdown.Item>
                        )
                    })
                }

            </Dropdown.Menu>
            </Dropdown>
        </Container>
    )
}

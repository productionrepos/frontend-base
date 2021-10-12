import React from 'react'
import {Dropdown, Container} from 'react-bootstrap'

import './DropDown.css'

export default function GreenDropdown({label,items}) {
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
            <Dropdown.Toggle style={{backgroundColor:'#009B78',color:'#FFF'}} className='dropdown-label'>
                { label || 'Primary'}
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

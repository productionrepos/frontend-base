import React from 'react'
import {Dropdown, Container} from 'react-bootstrap'

import './Dropdown.css'

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
        <Container style={{width:'50%'}}>
            <Dropdown >
            <Dropdown.Toggle  className='dropdown-label' style={{width:'100%',backgroundColor:'#009B78',color:'#FFF'}}>
                { label || 'Primary'}
            </Dropdown.Toggle>

            <Dropdown.Menu style={{width:'100%',backgroundColor:'rgba(0, 155, 120, 0.7)'}}>
                {
                    items.map( (elemento) => {
                        return (
                            <Dropdown.Item  id="green-d-item" key={elemento.href} href={elemento.href}>{elemento.href_label}</Dropdown.Item>
                        )
                    })
                }
            </Dropdown.Menu>
            </Dropdown>
        </Container>

    )
}

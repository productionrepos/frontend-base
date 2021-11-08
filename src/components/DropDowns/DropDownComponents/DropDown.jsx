import React from 'react'
import {Dropdown} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Dropdown.css'
import { NavLink } from 'react-router-dom';

export default function DropDown({label,actions,ToggleStyle, MenuStyle}) {
  let lista = []
  if ( actions && actions.length > 0 ){
    console.log(actions)
    lista = actions
  }
  else{
    lista = [
      {href:'#/action-1',href_label:'Action-1'},
      {href:'#/action-2',href_label:'Action-2'},
      {href:'#/action-3',href_label:'Action-3'},
      {href:'#/action-4',href_label:'Action-4'}
    ]
  }
    return (
        <Dropdown >
        <Dropdown.Toggle style={ ToggleStyle || {background:'#009B78', borderStyle:'none'}} className='dropdown-label'>
          {label || 'Dropdown'}
        </Dropdown.Toggle>

        <Dropdown.Menu  className='dropdown-menu-display' style={ MenuStyle || {backgroundColor:'rgba(0, 155, 120, 0.7)'}}>
          {lista.map( data  => (
            <NavLink key={data.href_label} className="nav-link links" exact to={data.href} activeClassName="activeClicked" >
              <Dropdown.Item id='green-d-item'key={data.href} href={data.href}>{data.href_label}</Dropdown.Item>
            </NavLink>
          ))}

     
        </Dropdown.Menu>
      </Dropdown>
    )
}

import React from 'react'
import {Dropdown} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './DropDown.css'

export default function RedDropdown({text,actions}) {
    let lista = []
    if ( actions && actions.length > 0 ){
      console.log(actions)
      lista = actions
    }
    else{
      lista = [
        {url:'#/action-1',url_text:'Action-1'},
        {url:'#/action-2',url_text:'Action-2'},
        {url:'#/action-3',url_text:'Action-3'},
        {url:'#/action-4',url_text:'Action-4'}
      ]
    }
      return (
          <Dropdown  className='drop' >
          <Dropdown.Toggle style={{background:'#EA4335',color:'#FFF', borderStyle:'none'}} className='drop-toggle'>
            {text || 'Dropdown'}
          </Dropdown.Toggle>w
  
          <Dropdown.Menu >
            {lista.map( data  => (
              <Dropdown.Item key={data.url} href={data.url}>{data.url_text}</Dropdown.Item>
  
            ))}
          </Dropdown.Menu>
        </Dropdown>
      )
}

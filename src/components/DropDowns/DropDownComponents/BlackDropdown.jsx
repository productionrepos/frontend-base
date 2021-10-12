import React from 'react'

import './DropDown.css'

export default function BlackDropdown({label,items}) {
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
        <div className='container-fluid'> 
            <div style={{ background:'#272726', paddingLeft:'2%',paddingRight:'2%', }}  className="btn-group" role="group" aria-label="Button group with nested dropdown">
                <button type="button" className="btn dropdown-test" style={{color:'#FFFFFF'}} >{ label || 'Warning'}</button>
                <div className="btn-group" role="group">
                    <button style={{color:'#FFFFFF'}} id="btnGroupDrop1" type="button" className="btn dropdown-test dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></button>

                    <div  className="dropdown-menu " aria-labelledby="btnGroupDrop1">
                    {
                        items.map((element) => {
                            return (
                                <a key={element.href} className="dropdown-item" href={element.href}>{element.href_label}</a>
                            )
                        })  
                    }

                    </div>
                </div>
            </div>
        </div>
    )
}

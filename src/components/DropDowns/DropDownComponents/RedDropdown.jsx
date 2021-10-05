import React from 'react'

import './DropDown.css'

export default function RedDropdown() {
    return (
        <div className='container-fluid'>
            <div style={{ background:'#EA4335', paddingLeft:'2%',paddingRight:'2%', }}  className="btn-group" role="group" aria-label="Button group with nested dropdown">
                <button type="button" className="btn dropdown-test" style={{color:'#FFFFFF'}} >Danger</button>
                <div className="btn-group" role="group">
                    <button style={{color:'#FFFFFF'}} id="btnGroupDrop1" type="button" className="btn dropdown-test dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></button>

                    <div  className="dropdown-menu " aria-labelledby="btnGroupDrop1">
                    <a className="dropdown-item" href="/link1">link1</a>
                    <a className="dropdown-item" href="/link2">link2</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

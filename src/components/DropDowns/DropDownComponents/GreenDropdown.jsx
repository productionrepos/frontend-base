import React from 'react'

import './DropDown.css'

export default function GreenDropdown() {
    return (
        <div className='container-fluid'>
            <div style={{ background:'#009B78', paddingLeft:'2%',paddingRight:'2%', }}  className="btn-group" role="group" aria-label="Button group with nested dropdown">
                <button type="button" className="btn dropdown-test" style={{color:'white'}} >Primary</button>
                <div className="btn-group" role="group">
                    <button style={{color:'white'}} id="btnGroupDrop1" type="button" className="btn dropdown-test dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></button>
                    <div  className="dropdown-menu " aria-labelledby="btnGroupDrop1">
                    <a className="dropdown-item" href="/ref1">Dropaaaadown link</a>
                    <a className="dropdown-item" href="/ref2">ased link</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

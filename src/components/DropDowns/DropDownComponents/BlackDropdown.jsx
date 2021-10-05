import React from 'react'

import './DropDown.css'

export default function BlackDropdown() {
    return (
        <div className='container-fluid'> 
            <div style={{ background:'#272726', paddingLeft:'2%',paddingRight:'2%', }}  className="btn-group" role="group" aria-label="Button group with nested dropdown">
                <button type="button" className="btn dropdown-test" style={{color:'#FFFFFF'}} >Warning</button>
                <div className="btn-group" role="group">
                    <button style={{color:'#FFFFFF'}} id="btnGroupDrop1" type="button" className="btn dropdown-test dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></button>

                    <div  className="dropdown-menu " aria-labelledby="btnGroupDrop1">
                    <a className="dropdown-item" href="/ref1">ref1</a>
                    <a className="dropdown-item" href="/ref2">ref2</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

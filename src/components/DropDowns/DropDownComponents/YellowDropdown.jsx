import React from 'react'

import './DropDown.css'

export default function YellowDropdown() {
    return (
        <div className='container-fluid'>
            <div style={{ background:'#FDD807', paddingLeft:'2%',paddingRight:'2%'}}  className="btn-group" role="group" aria-label="Button group with nested dropdown">
                <button type="button" className="btn dropdown-test" style={{color:'#2C2C2C'}} >Success</button>
                <div className="btn-group" role="group">
                    <button style={{color:'#2C2C2C'}} id="btnGroupDrop1" type="button" className="btn dropdown-test dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></button>

                    <div  className="dropdown-menu " aria-labelledby="btnGroupDrop1">
                    <a className="dropdown-item" href="/linka">linka</a>
                    <a className="dropdown-item" href="/linkb">linkb</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

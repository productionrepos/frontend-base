import React from 'react'

import '../TestButton.css'

export default function CheckBox() {
    return (
        <div className='container-fluid'>
            <div className="btn-group " role="group" aria-label="Basic checkbox toggle button group">
                <input type="checkbox" className="btn-check " id="btncheck1" checked="" autocomplete="off"/>
                <label style={{background:'#009B78',color:'#FFF'}} className="btn check-box-button " for="btncheck1">Checkbox 1</label>
                <input type="checkbox" className="btn-check " id="btncheck2" autocomplete="off"/>
                <label style={{background:'rgba(0, 155, 120, 0.93)',color:'#FFF'}}className="btn  check-box-button" for="btncheck2">Checkbox 2</label>
                <input type="checkbox" className="btn-check " id="btncheck3" autocomplete="off"/>
                <label style={{background:'rgba(0, 155, 120, 0.86)',color:'#FFF'}}className="btn check-box-button" for="btncheck3">Checkbox 3</label>
            </div>
        </div>
    )
}

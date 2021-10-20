import React from 'react'

import '../TestButton.css'
export default function CheckBox({ inputs }) {
    if( !inputs || inputs.length < 1){
        inputs = [
            {
                onClick:'',
                text:'CheckBox1',
                id:1
            },
            {
                onClick:'',
                text:'CheckBox2',
                id:2
            },
            {
                onClick:'',
                text:'CheckBox3',
                id:3
            }
        ]
    }
    return (
        <div className='container-fluid'>
            <div className="btn-group " role="group" aria-label="Basic checkbox toggle button group">

                {
                    inputs.map( (element) => {
                                return (
                                    <div key={element.id} style={{margin:'1%'}}>
                                        <input  onClick={element.onClick} type="checkbox" className="btn-check " id={'btncheck'+element.id}  autoComplete="off"/>
                                        <label  style={{background:element.background,color:'#FFF',padding:'20%'}} className="btn check-box-button " htmlFor={'btncheck'+element.id}>{element.text}</label>
                                    </div>
                                )             
                    } )
                }

            </div>
        </div>
    )
}

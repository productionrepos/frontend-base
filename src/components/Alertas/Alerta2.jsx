import React from 'react'
import Swal from 'sweetalert2'
import Button from '../Buttons/ButtonComponents/FilledButton'
import '../Buttons/ButtonComponents/TestButton.css'
import fondo from './fondo1.png'
import fondo2 from './fondo2.png'
export default function Alerta2({text, title}) {
    const botonStyle = {
        backgroundColor:'#FDD807',
        color:'#2C2C2C'
    }

    const texto = text || 'texto'
    const titulo = title || 'titulo'
    
    return (
        <div>
            <Button variant='btn-filled' styles={botonStyle} text='clickeame' onClickProp={ () => {
                Swal.fire({
                    title: "<h2 style='font-family:Nunito; color:#FFF'>" + titulo + "</h2>",
                    html: "<h3 style='font-family:Nunito; color:#FFF'>" + texto + "</h3>",
                    iconColor:'#FFF',
                    confirmButtonText: 'Entendido',
                    confirmButtonColor: '#fff',
                    imageUrl: fondo2,
                    imageWidth: 400,
                    imageHeight: 200,
                    background: `url(${fondo})`,
                    color:'#FFF'
                })
            } }/>
        </div>
    )
}

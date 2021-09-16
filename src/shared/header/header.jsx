import React, { useState } from 'react'
import title from '../../assets/title.svg'

export const Header = () => {

    const style = {
        with: '100%',
        height: '100px',
        backgroundColor: '#ADFFEC',
        position: 'fixed',
        width: '100%',
        top: '0',
        zIndex:"2"
        
    }

    const layerOne = {
        with: '100%',
        height: '90px',
        backgroundColor: '#00CC9C'
    }
    const layerTwo = {
        with: '100%',
        height: '80px',
        backgroundColor: '#009B78',
        color: 'white'
    }

    const contentTitleSpread = {
        display: 'flex',
        alignItems: 'center',
        color: 'white',
        'justify-content': 'space-between',
        paddingRight: '10px',
        height: '100%',
    }
    return (
        <div  style={style}>
            <div style={layerOne}>
                <div style={layerTwo}>
                      <div style={contentTitleSpread}>
                          <h2></h2>
                        <img alt="img-title" style={{ height: '40px'}} src={title}></img>
                      </div>
                </div>
            </div>
        </div>
    )

}


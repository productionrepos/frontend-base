import React from 'react'

export default function LinkCard({headerText,titleText,bodyText,href,href_label,CardContainerStyle,bodyStyle,headerStyle,linkStyle}) {
    return (
        <div className='container-fluid'>
                <div className="card white-text card-container2  mb-3" style={CardContainerStyle}>
                    <div className="card-header header-text" style={headerStyle}>{ headerText || 'Card9'}</div>
                    <div className="card-body" style={bodyStyle}>
                        <h4 className="card-title title-text"  >{ titleText || 'Primary card title'}</h4>
                        <p className="card-text body-text" >{ bodyText || "Some quick example text to build on the card title and make up the bulk of the card's content."}</p>
                        <div>
                            <a className='card-link-text 'style={linkStyle} href={ href || "/linka"}>{ href_label || 'Link A'}</a>
                        </div>
                    </div>

                </div>
        </div>
    )
}

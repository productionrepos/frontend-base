import React from 'react'
import propTypes from 'prop-types'

import './tarjeta.css'

function NormalCard({
  headerText,
  titleText,
  bodyText,
  headerStyle,
  bodyStyle,
  CardContainerStyle
}) {
  return (
    <div className="container-fluid">
      <div
        className="card white-text card-container2  mb-3"
        style={CardContainerStyle}>
        <div className="card-header header-text" style={headerStyle}>
          {headerText || 'Card1'}
        </div>
        <div className="card-body" style={bodyStyle}>
          <h4 className="card-title title-text">
            {titleText || 'Primary card title'}
          </h4>
          <p className="card-text body-text">
            {bodyText ||
              "Some quick example text to build on the card title and make up the bulk of the card's content."}
          </p>
        </div>
      </div>
    </div>
  )
}

NormalCard.propTypes = {
  headerText: propTypes.string,
  titleText: propTypes.string,
  bodyText: propTypes.string,
  headerStyle: propTypes.object,
  bodyStyle: propTypes.object,
  CardContainerStyle: propTypes.object
}

export default NormalCard

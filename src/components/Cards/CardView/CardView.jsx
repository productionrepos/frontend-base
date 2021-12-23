import React from 'react'
import './CardView.css'

import NormalCard from '../tarjetas/NormalCard'

import LinkCard from '../tarjetas/LinkCard'

import { Row, Col, Container } from 'react-bootstrap'

export default function Cards() {
  const bodyStyle = {
    backgroundColor: '#009B78',
    color: '#FFFFFF',
    fontSize: '300px'
  }
  const headerStyle = {
    backgroundColor: '#008063',
    color: '#FFFFFF'
  }
  const cardContainerStyle = {
    maxWidth: '20rem'
  }

  const bodyStyle2 = {
    backgroundColor: '#272726',
    color: '#FFFFFF'
  }
  const headerStyle2 = {
    backgroundColor: '#161613',
    color: '#FFFFFF'
  }
  const cardContainerStyle2 = {
    maxWidth: '20rem'
  }

  const bodyStyle3 = {
    backgroundColor: '#FDD807',
    color: '#243143'
  }
  const headerStyle3 = {
    backgroundColor: '#F1CD00',
    color: '#243143'
  }
  const cardContainerStyle3 = {
    maxWidth: '20rem'
  }

  const bodyStyle4 = {
    backgroundColor: '#EA4335',
    color: '#FFFFFF'
  }
  const headerStyle4 = {
    backgroundColor: '#D62819',
    color: '#FFFFFF'
  }
  const cardContainerStyle4 = {
    maxWidth: '20rem'
  }

  const bodyStyle5 = {
    backgroundColor: '#FFFFFF',
    color: '#272726'
  }
  const headerStyle5 = {
    backgroundColor: 'rgba(0, 155, 120, 0.8)',
    color: '#FFFFFF'
  }
  const cardContainerStyle5 = {
    border: '3px solid #009B78',
    maxWidth: '20rem'
  }

  const bodyStyle6 = {
    backgroundColor: '#FFFFFF',
    color: '#272726'
  }
  const headerStyle6 = {
    backgroundColor: 'rgba(39, 39, 38, 0.8)',
    color: '#FFFFFF'
  }
  const cardContainerStyle6 = {
    border: '3px solid #272726',
    maxWidth: '20rem'
  }

  const bodyStyle7 = {
    backgroundColor: '#FFFFFF',
    color: '#272726'
  }
  const headerStyle7 = {
    backgroundColor: 'rgba(253, 216, 7, 0.8)',
    color: '#272726'
  }
  const cardContainerStyle7 = {
    border: '3px solid #FDD807',
    maxWidth: '20rem',
    boxShadow: '4px 4px 24px rgba(0, 0, 0, 0.1)',
    borderRadius: '5px'
  }

  const bodyStyle8 = {
    backgroundColor: '#FFFFFF',
    color: '#272726'
  }
  const headerStyle8 = {
    backgroundColor: 'rgba(234, 67, 53, 0.8)',
    color: '#272726'
  }
  const cardContainerStyle8 = {
    border: '3px solid #EA4335',
    maxWidth: '20rem',
    boxShadow: '4px 4px 24px rgba(0, 0, 0, 0.1)',
    borderRadius: '5px'
  }

  const bodyStyle9 = {
    backgroundColor: '#009B78',
    color: '#FFFFFF'
  }
  const headerStyle9 = {
    backgroundColor: '#008063',
    color: '#FFFFFF'
  }
  const cardContainerStyle9 = {
    maxWidth: '20rem'
  }
  const cardLinkStyle9 = {
    color: '#FFF'
  }

  const bodyStyle10 = {
    backgroundColor: '#FFFFFF',
    color: '#272726'
  }
  const headerStyle10 = {
    backgroundColor: 'rgba(0, 155, 120, 0.8)',
    color: '#FFFFFF'
  }
  const cardContainerStyle10 = {
    maxWidth: '20rem'
  }
  const cardLinkStyle10 = {
    color: '#009B78'
  }
  const bodyText =
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa a voluptas nesciunt eos optio, minus, similique magnam quia laudantium ipsa'

  return (
    <Container style={{ marginTop: '9.65%' }}>
      <Row>
        <Col>
          <NormalCard
            headerText="Card1"
            titleText="Primary Card1 Title"
            CardContainerStyle={cardContainerStyle}
            bodyText={bodyText}
            bodyStyle={bodyStyle}
            headerStyle={headerStyle}
          />
        </Col>
        <Col>
          <NormalCard
            headerText="Card2"
            titleText="Primary Card2 Title"
            CardContainerStyle={cardContainerStyle2}
            bodyStyle={bodyStyle2}
            headerStyle={headerStyle2}
          />
        </Col>
        <Col>
          <NormalCard
            headerText="Card3"
            titleText="Primary Card3 Title"
            CardContainerStyle={cardContainerStyle3}
            bodyText={bodyText}
            bodyStyle={bodyStyle3}
            headerStyle={headerStyle3}
          />
        </Col>
        <Col>
          <NormalCard
            headerText="Card4"
            titleText="Primary Card4 Title"
            CardContainerStyle={cardContainerStyle4}
            bodyStyle={bodyStyle4}
            headerStyle={headerStyle4}
          />
        </Col>
      </Row>

      <Row>
        <Col>
          <NormalCard
            headerText="Card5"
            titleText="Primary Card5 Title"
            CardContainerStyle={cardContainerStyle5}
            bodyText={bodyText}
            bodyStyle={bodyStyle5}
            headerStyle={headerStyle5}
          />
        </Col>
        <Col>
          <NormalCard
            headerText="Card6"
            titleText="Primary Card6 Title"
            CardContainerStyle={cardContainerStyle6}
            bodyStyle={bodyStyle6}
            headerStyle={headerStyle6}
          />
        </Col>
        <Col>
          <NormalCard
            headerText="Card7"
            titleText="Primary Card7 Title"
            CardContainerStyle={cardContainerStyle7}
            bodyText={bodyText}
            bodyStyle={bodyStyle7}
            headerStyle={headerStyle7}
          />
        </Col>
        <Col>
          <NormalCard
            headerText="Card8"
            titleText="Primary Card8 Title"
            CardContainerStyle={cardContainerStyle8}
            bodyStyle={bodyStyle8}
            headerStyle={headerStyle8}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <LinkCard
            headerText="Card9"
            titleText="Primary Card9 Title"
            CardContainerStyle={cardContainerStyle9}
            bodyStyle={bodyStyle9}
            headerStyle={headerStyle9}
            linkStyle={cardLinkStyle9}
          />
        </Col>
        <Col>
          <LinkCard
            headerText="Card10"
            titleText="Primary Card10 Title"
            href="/linkb"
            href_label="Link B"
            CardContainerStyle={cardContainerStyle10}
            bodyStyle={bodyStyle10}
            headerStyle={headerStyle10}
            linkStyle={cardLinkStyle10}
          />
        </Col>
      </Row>
    </Container>
  )
}

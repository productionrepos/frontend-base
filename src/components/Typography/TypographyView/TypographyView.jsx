import React from 'react'
import Heading1 from '../TypographyComponents/Heading1'
import Heading2 from '../TypographyComponents/Heading2'
import Heading3 from '../TypographyComponents/Heading3'
import Heading4 from '../TypographyComponents/Heading4'
import Heading5 from '../TypographyComponents/Heading5'
import Heading6 from '../TypographyComponents/Heading6'

import MutedHeading1 from '../TypographyComponents/MutedHeading1'
import MutedHeading2 from '../TypographyComponents/MutedHeading2'
import MutedHeading3 from '../TypographyComponents/MutedHeading3'
import MutedHeading4 from '../TypographyComponents/MutedHeading4'
import MutedHeading5 from '../TypographyComponents/MutedHeading5'
import MutedHeading6 from '../TypographyComponents/MutedHeading6'

import Emphasis from '../TypographyComponents/Emphasis'
import Quoteblock from '../TypographyComponents/Quoteblock'

import { Container, Row, Col } from 'react-bootstrap'

export default function TypographyView() {
    return (
        <Container fluid style={{marginTop:'9.65%'}}>
            <Row>
                <Col>
                    <Heading1/>
                    <Heading2/>
                    <Heading3 color='#EA4335'/>
                    <Heading4 color='#979797'/>
                    <Heading5 color='#FDD807'/>
                    <Heading6 color='#009B78' text='texto asd y color en props'/>
                </Col>
                <Col>
                    <MutedHeading1 color='#EA4335' text='texto y color por props' mutedText=' con texto muted por props'/>
                    <MutedHeading2/>
                    <MutedHeading3/>
                    <MutedHeading4/>
                    <MutedHeading5/>
                    <MutedHeading6/>
                </Col>
            </Row>
            <br />
            <Row>
                <Col>
                    <h2>Emphasis classes</h2>
                    <Emphasis/>
                    <Emphasis color="text-secondary" text="Pellentesque ornare sem lacinia quam venenatis vestibulum."/>
                    <Emphasis color="text-warning" text="Etiam porta sem malesuada magna mollis euismod."/>
                    <Emphasis color="text-danger" text="Donec ullamcorper nulla non metus auctor fringilla."/>
                    <Emphasis color="text-success" text ="Duis mollis, est non commodo luctus, nisi erat porttitor ligula."/>
                    <Emphasis color="text-info" text="Maecenas sed diam eget risus varius blandit sit amet non magna."/>
                </Col>
                <Col>
                    <h2>Blockquotes</h2>
                    <Quoteblock/>
                </Col>
            </Row>
        </Container>
    )
}

import React, { Component } from 'react'
import { Container, Col, Row, Image } from 'react-bootstrap'
import portrait from '../images/professionalPortrait.jpg'

export default class About extends Component {
    render() {
        return (
            <Container fluid>
                <Row>
                    <Col xl="auto">
                        <Image src={portrait} alt='Picture' id="author-img" className="float-left img-fluid rounded-circle m-4"/>
                    </Col>
                    <Col>
                        <h1>Placeholder Text</h1>
                    </Col>
                </Row>
            </Container>
        )
    }
}
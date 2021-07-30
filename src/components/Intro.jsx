import React, { Component } from 'react'
import { Container, Col, Row, Image } from 'react-bootstrap'
import portrait from '../images/professionalPortrait.jpg'

export default class Intro extends Component {
    render() {
        return (
            <Container fluid className="palette4-background white-text">
                <Row>
                    <Col xl="auto">
                        <Image src={portrait} alt='Picture' id="author-img" className="m-4 img-fluid rounded-circle d-flex justify-content"/>
                    </Col>
                    <Col>
                        <Container className="text-center">
                            <Row className="m-3">
                                <h1>Hey! I'm Mauricio Muñoz</h1>
                                <h3>Third-year Computer Science Student at UCSB</h3>
                                <hr></hr>
                            </Row>
                            <Row>
                                <p id="intro-text">Welcome to my website! I started this website as a way to practice coding in React, HTML, CSS and 
                                    have a place to allow others to learn about me. Currently, I am looking to get my career started 
                                    in software development through an internship. Feel free to explore and learn more about what I enjoy
                                    and what I have done in my first two years of college!
                                </p>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
        )
    }
}
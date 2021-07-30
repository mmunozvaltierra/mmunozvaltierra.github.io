import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export default class About extends Component {
    render() {
        return (
            <Container className="mt-3">
                <h1 className="text-center">About Me</h1>
                <Container className="text-justify">
                    <Row>
                        <Col>
                            <p>
                                I am a first-generation latino college student. I was born in Calvillo, Aguascalientes, Mexico which some would call a big city in Mexico. 
                                Although, my family comes from a small farming town called General Ignacio Zaragoza, also known as Venadero. Not many people know about it
                                which is why I also use it as my gamertag online. Since it's always available :). I moved to the United States wih my family around the age of 2
                                and lived in Montclair, CA until 2nd grade. After that, I moved to where I currently live in Bloomington, CA. I also study at UC Santa Barbara
                                which is always great because of the weather and the beach a short walk away. It's a big difference compared to Bloomington which is in a dry valley
                                that commonly hits 100 degrees in the summer.
                            </p>
                        </Col>
                        <Col>
                            <p>Images</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p>
                                I enjoy moving around for fun. Sports have always been part of my life with my favorite being baseball. I played baseball since I was in the 4th
                                grade. Entering college, I stopped playing with a team but I still play time to time with my friends. It seems weightlifting has taken the place of
                                baseball in that manner. I started lifting in college and have been lifting since then with the exception of the COVID-19 lockdown.
                            </p>
                        </Col>
                        <Col>
                            <p>Images</p>
                        </Col>
                    </Row>
                </Container>
            </Container>
        )
    }
}
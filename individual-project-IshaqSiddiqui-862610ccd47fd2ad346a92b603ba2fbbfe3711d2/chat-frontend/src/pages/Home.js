import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

function Home() {
    return (
        <Row>
        <Col md={6} className="d-flex flex-direction-column align-items-center justify-content-center">
                <div>
                    <h1>Ishaq's chat app</h1>
                    <p>Be a part of this journey!</p>
                    <LinkContainer to="/chat">
                        <Button variant="success">
                            Begin chatting <i className="fas fa-comments home-message-icon"></i>
                        </Button>
                    </LinkContainer>
                </div>
            </Col>
            <Col md={6} className="home__bg"></Col>
        </Row>
    );
}

export default Home;
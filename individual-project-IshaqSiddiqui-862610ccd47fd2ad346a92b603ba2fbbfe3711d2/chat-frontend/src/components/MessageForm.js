import React from 'react'
import {Form, Row, Col, Button} from 'react-bootstrap';
import './MessageForm.css';

function MessageForm() {

  function handleSubmit(e){
    e.preventDefault();
  }

  return (
    <>
    <div class="message-send"> </div>
    <Form onSubmit={handleSubmit}>
    <Row>
   <Col md={11}>
  <Form.Group>
 <Form.Control type="text" placeholder="Your message"></Form.Control>
  </Form.Group>
  </Col>
 <Col md={1}>
<Button variant="outline-primary" type="submit"  size="lg">
Send
        </Button>
        </Col>
          </Row>
        </Form>
        
      </>
    
  )
}

export default MessageForm

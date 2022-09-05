import React from 'react';
import {ListGroup} from 'react-bootstrap';

function Sidebar() {
    const rooms = ['room one', 'room two', 'room three']; 
  return (
    <>
    <h2> Rooms that are available </h2>
    <ListGroup> 
    {rooms.map((room, idx) => (
            <ListGroup.Item key={idx}> {room} </ListGroup.Item>
                ))}

    </ListGroup> 
    <h2> Members </h2>
    </>
  )
}

export default Sidebar

import React from 'react';
import { ListGroup, ListGroupItem } from 'mdbreact';

const MyStack = (myStack) => {
  return(
    <ListGroup>
      {myStack.map(tech => {return<ListGroupItem href="#" hover className="p-1">{tech}</ListGroupItem>})}
    </ListGroup>
  )
}

export default MyStack;


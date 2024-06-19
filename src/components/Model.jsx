import { useState } from 'react';
import Button from 'react-bootstrap/Button';

import Form from 'react-bootstrap/Form';


import Modal from 'react-bootstrap/Modal';

function Model() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form  >
          <h2>Ombrelllo Login</h2>
          <Model/>

             

        <Form.Group className="mb-3" controlId="formGridAddress1">
        
        <Form.Control type="email" name="email" placeholder="Enter email" />
      </Form.Group>
     

      <Form.Group className="mb-3" controlId="formGridAddress1">
        
        <Form.Control type="password" name="password" placeholder="Password"  />
      </Form.Group>

      

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>

        ghdgghh
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Model;

import React from 'react'
import { Modal, Button } from 'react-bootstrap'

const ModalDialog = (props) => {

  console.log(props)
 
  return (
    <>
      <Modal show={props.isShow}>
        <Modal.Header closeButton onClick={props.calltoClose}>
          <Modal.Title>React Modal Popover Example</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={props.calltoClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
export default ModalDialog;
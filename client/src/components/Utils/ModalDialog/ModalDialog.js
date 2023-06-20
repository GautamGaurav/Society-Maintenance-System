import React from "react";
import { Modal } from "react-bootstrap";

const ModalDialog = (props) => {
  const { show, calltoClose, children, headerText } = props;
  return (
    <>
      <Modal show={show}>
        <Modal.Header closeButton onClick={() => calltoClose(false)}>
          <Modal.Title>{headerText}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
        {/* <Modal.Footer>
          <Button variant="danger" onClick={() => calltoClose(false)}>
            Close
          </Button>
        </Modal.Footer> */}
      </Modal>
    </>
  );
};
export default ModalDialog;

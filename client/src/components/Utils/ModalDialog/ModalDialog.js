import React from "react";
import { Modal } from "react-bootstrap";

const ModalDialog = (props) => {
  const { show, calltoClose, children, headerText, title } = props;
  return (
    <>
      <Modal show={show}>
        <Modal.Header closeButton onClick={() => calltoClose(false)}>
          <Modal.Title>{headerText}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="card">
            <div className="card-body">
              <div className="card-title">
                <h3 className="text-center title-2">{title}</h3>
              </div>
              {children}
            </div>
          </div>
        </Modal.Body>
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

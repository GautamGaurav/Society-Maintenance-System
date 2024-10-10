import React from "react";
import { Modal } from "react-bootstrap";
import { Button } from "../../Layout";
import "./ModalDialog.css";

const ModalDialog = (props) => {
  const { show, calltoClose, children, headerText, title, saveButtonText, onSaveButtonClick } = props;
  return (
    <>
      <Modal show={show}>
        <Modal.Header closeButton onClick={() => calltoClose(false)}>
          <Modal.Title>{headerText}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="card">
            <div className="card-header">{title}</div>
            <div className="card-body">
              {children}
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            text={saveButtonText ? saveButtonText : "Save"}
            onClick={onSaveButtonClick}
            variant="info"
          />
          <Button
            variant="danger"
            onClick={() => calltoClose(false)}
            text={"Close"}
          />
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default ModalDialog;

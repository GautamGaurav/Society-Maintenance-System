import { useState, useEffect } from "react";
import { NotificationManager } from "react-notifications";
import axios from "axios";
import "./Society.css";
import ListContainer from "../Utils/ListContainer/ListContainer";
import { Modal } from "react-bootstrap";

const Society = () => {
  const [isNew, setIsNew] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [societyList, setSocietyList] = useState([]);
  const [inputs, setInputs] = useState({});

  useEffect(() => {
    getAllSociety();
  }, []);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const getAllSociety = () => {
    axios
      .get("http://localhost:3001/api/society")
      .then((response) => {
        setSocietyList(response.data);
      })
      .catch((error) => {
        console.log("error ===> ", error);
        //NotificationManager.error(error.response.data.message);
      });
  };

  const addSociety = () => {
    axios
      .post("http://localhost:3001/api/Society", {})
      .then((response) => {
        console.log("response =======>", response.data);
        NotificationManager.success(response.data.message);
      })
      .catch((error) => {
        console.log("error ===> ", error);
        //NotificationManager.error(error.response.data.message);
      });
  };

  const cancel = () => setIsNew(false);

  useEffect(() => {
    getAllSociety();
    setIsNew(false);
    setIsUpdate(false);
  }, []);

  return (
    <div>
      <button
        className="au-btn au-btn-icon au-btn--green au-btn--small mb-3"
        onClick={() => setIsNew(true)}
      >
        <i className="zmdi zmdi-plus"></i>
        Add New Society
      </button>
      
      <ListContainer heading={"Society List"} dataList={societyList} />
      
      {/* ----------Add New Society----------------- */}
      <Modal show={isNew || isUpdate}>
        <Modal.Header closeButton onClick={() => setIsNew(false)}>
          <Modal.Title>
            {isNew ? "Add New Society" : "Update Society"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="card">
            <div className="card-header">
            Society Details
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-6">
                  <div className="form-group">
                    <label className="control-label mb-1">
                      Society President
                    </label>
                    <div className="input-group">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Enter Society President Name"
                        onChange={(e) => {
                          handleChange(e.target.value);
                        }}
                        value={inputs.name || ""}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="form-group">
                    <label className="control-label mb-1">Builder</label>
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Builder Name"
                        name="builder"
                        value={inputs.name || ""}
                        onChange={(e) => {
                          handleChange(e);
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-group has-success">
                <div className="form-group">
                  <label className="control-label mb-1">Address</label>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Address"
                      name="address"
                      value={inputs.address || ""}
                      onChange={(e) => {
                        handleChange(e);
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-6">
                  <div className="form-group">
                    <label className="control-label mb-1">City</label>
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter City"
                        name="city"
                        value={inputs.city || ""}
                        onChange={(e) => {
                          handleChange(e);
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="form-group">
                    <label className="control-label mb-1">State</label>
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter State"
                        name="state"
                        value={inputs.state || ""}
                        onChange={(e) => {
                          handleChange(e);
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <div className="col-6">
                  <div className="form-group">
                    <label className="control-label mb-1">Pin Code</label>
                    <div className="input-group">
                      <input
                        type="number"
                        className="form-control"
                        placeholder="Enter Pin Code"
                        name="pinCode"
                        value={inputs.pinCode || ""}
                        onChange={(e) => {
                          handleChange(e);
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-3"></div>
              <div>
                <button
                  type="submit"
                  className="btn btn-md btn-info"
                  onClick={addSociety}
                >
                  <i className="fa fa-lock fa-lg"></i>&nbsp;
                  <span id="payment-button-amount">Save</span>
                </button>
                <button
                  type="submit"
                  onClick={cancel}
                  className="btn btn-md btn-danger ml-15"
                >
                  <i className="fa fa-lock fa-lg"></i>&nbsp;
                  <span id="payment-button-amount">Cancel</span>
                </button>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Society;

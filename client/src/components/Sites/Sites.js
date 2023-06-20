import { useState, useEffect } from "react";
import { NotificationManager } from "react-notifications";
import axios from "axios";
import "./Sites.css";
import ListContainer from "../Utils/ListContainer/ListContainer";
import ModalDialog from "../Utils/ModalDialog/ModalDialog";

function Sites() {
  const [isNew, setIsNew] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [siteList, setSiteList] = useState([]);
  const [inputs, setInputs] = useState({});

  useEffect(() => {
    getAllSites();
  }, []);

  const handleState = (value) => {
    setIsNew(value);
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const getAllSites = () => {
    axios
      .get("http://localhost:3001/api/sites")
      .then((response) => {
        setSiteList(response.data);
      })
      .catch((error) => {
        console.log("error ===> ", error);
        NotificationManager.error(error.response.data.message);
      });
  };

  const addSite = () => {
    axios
      .post("http://localhost:3001/api/site", inputs)
      .then((response) => {
        console.log("response =======>", response.data);
        NotificationManager.success("New Site Added Successfully!");
        setInputs({});
        setIsNew(false);
        getAllSites();
      })
      .catch((error) => {
        console.log("error ===> ", error);
        //NotificationManager.error(error.response.data.message);
      });
  };

  const updateSite = () => {
    axios
      .post("http://localhost:3001/api/site", inputs)
      .then((response) => {
        console.log("response =======>", response.data);
        NotificationManager.success(response.data.message);
      })
      .catch((error) => {
        console.log("error ===> ", error);
        //NotificationManager.error(error.response.data.message);
      });
  };

  const cancel = () => {};

  return (
    <div>
      <ListContainer
        heading={"Site List"}
        dataList={siteList}
        addNew={handleState}
        btnText={"Add New Site"}
      />
      <ModalDialog
        show={isNew}
        calltoClose={handleState}
        headerText={"Add New Site"}
      >
        <div className="card">
          <div className="card-body">
            <div className="card-title">
              <h3 className="text-center title-2">Site Details</h3>
            </div>
            <hr />
            <div className="form-group">
              <label className="control-label mb-1">Site Name</label>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Site Name"
                  name="name"
                  value={inputs.name || ""}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <div className="form-group">
                  <label className="control-label mb-1">Site President</label>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Society President Name"
                      name="societyPresidentName"
                      value={inputs.societyPresidentName || ""}
                      onChange={(e) => {
                        handleChange(e);
                      }}
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
                      name="builderName"
                      value={inputs.builderName || ""}
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
                      type="text"
                      className="form-control"
                      placeholder="Enter Pin Code"
                      name="pincode"
                      value={inputs.pincode || ""}
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
                onClick={isUpdate ? updateSite : addSite}
              >
                <i className="fa fa-lock fa-lg"></i>&nbsp;
                <span id="payment-button-amount">
                  {isUpdate ? "Update" : "Save"}
                </span>
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
      </ModalDialog>
    </div>
  );
}

export default Sites;

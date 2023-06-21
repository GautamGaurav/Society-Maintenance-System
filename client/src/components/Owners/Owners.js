import { useState, useEffect } from "react";
import axios from "axios";
import { NotificationManager } from "react-notifications";
import "./Owners.css";
import ListContainer from "../Utils/ListContainer/ListContainer";
import ModalDialog from "../Utils/ModalDialog/ModalDialog";

const Owners = () => {
  const [isNew, setIsNew] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [ownersList, setOwnersList] = useState([]);
  const [inputs, setInputs] = useState({});
  const [siteList, setSiteList] = useState([]);

  useEffect(() => {
    getAllOwners();
    getAllSite();
  }, []);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleState = (value) => {
    setIsNew(value);
  };

  const getAllSite = () => {
    axios
      .get("http://localhost:3001/api/sites")
      .then((response) => {
        setSiteList(response.data);
      })
      .catch((error) => {
        console.log("error ===> ", error);
        //NotificationManager.error(error.response.data.message);
      });
  };

  const getAllOwners = () => {
    axios
      .get("http://localhost:3001/api/owners")
      .then((response) => {
        setOwnersList(response.data);
      })
      .catch((error) => {
        console.log("error ===> ", error);
        //NotificationManager.error(error.response.data.message);
      });
  };

  const addOwners = () => {
    axios
      .post("http://localhost:3001/api/Owners", inputs)
      .then((response) => {
        console.log("response =======>", response.data);
        NotificationManager.success("Owners Added Successfully!");
        setInputs({});
        setIsNew(false);
        getAllOwners();
      })
      .catch((error) => {
        console.log("error ===> ", error);
        //NotificationManager.error(error.response.data.message);
      });
  };

  const updateOwners = () => {
    axios
      .post("http://localhost:3001/api/Owners", {})
      .then((response) => {
        console.log("response =======>", response.data);
        // NotificationManager.success(response.data.message);
      })
      .catch((error) => {
        console.log("error ===> ", error);
        //NotificationManager.error(error.response.data.message);
      });
  };

  const cancel = () => setIsNew(false);

  return (
    <div>
      <ListContainer
        heading={"Owners List"}
        dataList={ownersList}
        addNew={handleState}
        btnText={"Add New Owners"}
      />
      <ModalDialog
        show={isNew}
        calltoClose={handleState}
        headerText={"Add New Owners"}
      >
        <div className="card">
          <div className="card-body">
            <div className="card-title">
              <h3 className="text-center title-2">Owners Details</h3>
            </div>
            <div className="row">
              <div className="col-6">
                <div className="form-group">
                  <label className="control-label mb-1">Owners Name</label>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Owners Name"
                      name="name"
                      onChange={(e) => {
                        handleChange(e);
                      }}
                      value={inputs.name || ""}
                    />
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="form-group">
                  <label className="control-label mb-1">Select Site</label>
                  <div className="input-group">
                    <select
                      name="site"
                      id="cars"
                      className="form-control"
                      onChange={(e) => {
                        handleChange(e);
                      }}
                    >
                      <option value="0">--Select Site--</option>
                      {siteList.map((site) => (
                        <option value={site.id}>{site.name}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <div className="form-group">
                  <label className="control-label mb-1">Email</label>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Owners Email"
                      name="email"
                      onChange={(e) => {
                        handleChange(e);
                      }}
                      value={inputs.email || ""}
                    />
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="form-group">
                  <label className="control-label mb-1">Contact No</label>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Owners Contact No"
                      name="contactNo"
                      onChange={(e) => {
                        handleChange(e);
                      }}
                      value={inputs.contactNo || ""}
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
                    onChange={(e) => {
                      handleChange(e);
                    }}
                    value={inputs.address || ""}
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
                      onChange={(e) => {
                        handleChange(e);
                      }}
                      value={inputs.city || ""}
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
                      onChange={(e) => {
                        handleChange(e);
                      }}
                      value={inputs.state || ""}
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
                      onChange={(e) => {
                        handleChange(e);
                      }}
                      value={inputs.pincode || ""}
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
                onClick={isUpdate ? updateOwners : addOwners}
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
};

export default Owners;

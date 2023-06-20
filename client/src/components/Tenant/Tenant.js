import react, { useState, useEffect } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { NotificationManager } from "react-notifications";
import axios from "axios";
import "./Tenant.css";
import ListContainer from "../Utils/ListContainer/ListContainer";

function Tenant() {
  const location = useLocation();
  const history = useHistory();
  // const isNew = location.pathname.includes("/owner/new");
  // const isUpdate = location.pathname.includes("owner/details");
  const isView = location.pathname.includes("owners");

  const [ownerName, setOwnerName] = useState("");
  const [societyPresidentName, setSocietyPresidentName] = useState("");
  const [builderName, setBuilderName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pincode, setPincode] = useState("");
  const [ownerList, setOwnerList] = useState([]);

  const [ownerInfo, setOwnerInfo] = useState({});

  useEffect(() => {
    getAllOwners();
  }, []);

  const getAllOwners = () => {
    axios
      .get("http://localhost:3001/api/owners")
      .then((response) => {
        setOwnerList(response.data);
      })
      .catch((error) => {
        console.log("error ===> ", error);
        NotificationManager.error(error.response.data.message);
      });
  };

  const getOwner = () => {
    axios
      .get("http://localhost:3001/api/owner/:id")
      .then((response) => {
        setOwnerList(response.data);
      })
      .catch((error) => {
        console.log("error ===> ", error);
        NotificationManager.error(error.response.data.message);
      });
  };

  const addOwner = () => {
    axios
      .post("http://localhost:3001/api/owner", {
        ownerName: ownerName,
        societyPresidentName: societyPresidentName,
        builderName: builderName,
        address: address,
        city: city,
        state: state,
        pincode: pincode,
      })
      .then((response) => {
        console.log("response =======>", response.data);
        NotificationManager.success(response.data.message);
      })
      .catch((error) => {
        console.log("error ===> ", error);
        NotificationManager.error(error.response.data.message);
      });
  };

  const updateOwner = () => {
    axios
      .post("http://localhost:3001/api/owner", {
        ownerId: ownerInfo.ownerId,
        ownerName: ownerName,
        societyPresidentName: societyPresidentName,
        builderName: builderName,
        address: address,
        city: city,
        state: state,
        pincode: pincode,
      })
      .then((response) => {
        console.log("response =======>", response.data);
        NotificationManager.success(response.data.message);
      })
      .catch((error) => {
        console.log("error ===> ", error);
        NotificationManager.error(error.response.data.message);
      });
  };

  const nevigate = (to) => {
    history.push({ pathname: to });
  };

  return (
    <div>
      {isView ? (
        <ListContainer heading={"Owner List"} dataList={ownerList} />
      ) : (
        <div className="card">
          <div className="card-header">Add New Owner</div>
          <div className="card-body">
            <div className="card-title">
              <h3 className="text-center title-2">Owner Details</h3>
            </div>
            <hr />
            <div className="row">
              <div className="col-6">
                <div className="form-group">
                  <label className="control-label mb-1">Owner Name</label>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Owner Name"
                      onChange={(e) => {
                        setOwnerName(e.target.value);
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <div className="form-group">
                  <label className="control-label mb-1">Owner President</label>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Owner President Name"
                      onChange={(e) => {
                        setSocietyPresidentName(e.target.value);
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
                      onChange={(e) => {
                        setBuilderName(e.target.value);
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
                    onChange={(e) => {
                      setAddress(e.target.value);
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
                      onChange={(e) => {
                        setCity(e.target.value);
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
                      onChange={(e) => {
                        setState(e.target.value);
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
                      onChange={(e) => {
                        setPincode(e.target.value);
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
                onClick={addOwner}
              >
                <i className="fa fa-lock fa-lg"></i>&nbsp;
                <span id="payment-button-amount">Save</span>
              </button>
              <button
                type="submit"
                onClick={() => nevigate("/owners")}
                className="btn btn-md btn-danger ml-15"
              >
                <i className="fa fa-lock fa-lg"></i>&nbsp;
                <span id="payment-button-amount">Cancel</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Tenant;

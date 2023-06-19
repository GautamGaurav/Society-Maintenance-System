import { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import axios from "axios";
//import { NotificationManager } from 'react-notifications';
import "./Builders.css";
import ListContainer from "../Utils/ListContainer/ListContainer";

const Builders = () => {
  const history = useHistory();
  const location = useLocation();
  const [isNew, setIsNew] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [builderList, setBuilderList] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pincode, setPincode] = useState("");

  useEffect(() => {
    //console.log("REACT_API_PATH =======>", process.env.REACT_APP_API_KEY)
    debugger;
    getAllBuilders();
    setIsNew(location.pathname.includes("new"));
    setIsUpdate(location.pathname.includes("details"));
  }, []);

  const getAllBuilders = () => {
    axios
      .get("http://localhost:3001/api/builders")
      .then((response) => {
        setBuilderList(response.data);
      })
      .catch((error) => {
        console.log("error ===> ", error);
        //NotificationManager.error(error.response.data.message);
      });
  };

  const addBuilder = () => {
    axios
      .post("http://localhost:3001/api/Builder", {
        name: name,
        email: email,
        contactNo: contactNo,
        address: address,
        city: city,
        state: state,
        pincode: pincode,
      })
      .then((response) => {
        console.log("response =======>", response.data);
        //NotificationManager.success(response.data.message);
      })
      .catch((error) => {
        console.log("error ===> ", error);
        //NotificationManager.error(error.response.data.message);
      });
  };

  const updateBuilder = () => {
    axios
      .post("http://localhost:3001/api/Builder", {
        name: name,
        email: email,
        contactNo: contactNo,
        address: address,
        city: city,
        state: state,
        pincode: pincode,
      })
      .then((response) => {
        console.log("response =======>", response.data);
        // NotificationManager.success(response.data.message);
      })
      .catch((error) => {
        console.log("error ===> ", error);
        //NotificationManager.error(error.response.data.message);
      });
  };

  const cancel = () => history.push({ pathname: "/sites" });

  return (
    <div>
      
      <ListContainer heading={"Society List"} dataList={builderList} />
      <div className="card">
        <div className="card-header">
          {isNew ? "Add New Builder" : "Update Builder"}
        </div>
        <div className="card-body">
          <div className="card-title">
            <h3 className="text-center title-2">Builder Details</h3>
          </div>
          <hr />
          <div className="form-group">
            <label className="control-label mb-1">Builder Name</label>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Builder Name"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
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
                    placeholder="Enter Builder Email"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
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
                    placeholder="Enter Builder Contact No"
                    onChange={(e) => {
                      setContactNo(e.target.value);
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
              onClick={isUpdate ? updateBuilder : addBuilder}
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
    </div>
  );
};

export default Builders;

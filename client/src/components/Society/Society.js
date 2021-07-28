import react, { useState, useEffect } from "react";
import { NotificationManager } from "react-notifications";
import axios from "axios";
import "./Society.css";
import PageContainer from "../Utils/PageContainer/PageContainer";

function Society() {
  const [isNew, setAddingNewSociety] = useState(false);
  const [societyName, setSocietyName] = useState("");
  const [societyPresidentName, setSocietyPresidentName] = useState("");
  const [builderName, setBuilderName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pincode, setPincode] = useState("");
  const [societyList, setSocietyList] = useState([]);

  useEffect(() => {
    GetAllSociety();
  }, []);

  const GetAllSociety = () => {
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
  const AddSociety = () => {
    axios
      .post("http://localhost:3001/api/Society", {
        societyName: societyName,
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
        //NotificationManager.error(error.response.data.message);
      });
  };

  const AddNewSociety = () => setAddingNewSociety(true);
  const Cancel = () => setAddingNewSociety(false);

  return (
    <div>
      {societyList && societyList.length && societyList.length > 0 ? (
        <PageContainer
          heading={"Society List"}
          dataList={societyList}
          nevigateTo="/society/new"
          nevigateButtonText="Add New society"
        ></PageContainer>
      ) : (
        "No Data Found"
      )}

      {/* ----------Add New Society----------------- */}
      {isNew ? (
        <div className="card">
          <div className="card-header">Add New Society</div>
          <div className="card-body">
            <div className="card-title">
              <h3 className="text-center title-2">Society Details</h3>
            </div>
            <hr />
            <div className="form-group">
              <label className="control-label mb-1">Society Name</label>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Society Name"
                  onChange={(e) => {
                    setSocietyName(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <div className="form-group">
                  <label className="control-label mb-1">
                    Society President
                  </label>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Society President Name"
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
                onClick={AddSociety}
              >
                <i className="fa fa-lock fa-lg"></i>&nbsp;
                <span id="payment-button-amount">Save</span>
              </button>
              <button
                type="submit"
                onClick={Cancel}
                className="btn btn-md btn-danger ml-15"
              >
                <i className="fa fa-lock fa-lg"></i>&nbsp;
                <span id="payment-button-amount">Cancel</span>
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Society;

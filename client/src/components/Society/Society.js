import { useState, useEffect } from "react";
import { NotificationManager } from "react-notifications";
import axios from "axios";
import "./Society.css";
import ListContainer from "../Utils/ListContainer/ListContainer";
import ModalDialog from "../Utils/ModalDialog/ModalDialog";

const Society = () => {
  const apiUrl = "http://localhost:3001/api/societies";
  const cudAPIUrl = "http://localhost:3001/api/society";
  const siteAPIUrl = "http://localhost:3001/api/sites";
  const [isNew, setIsNew] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [societyList, setSocietyList] = useState([]);
  const [inputs, setInputs] = useState({});
  const [siteList, setSiteList] = useState([]);

  useEffect(() => {
    getAllSociety();
    getAllSite();
  }, []);

  const handleState = (value) => {
    setIsNew(value);
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const getAllSite = () => {
    axios
      .get(siteAPIUrl)
      .then((response) => {
        setSiteList(response.data);
      })
      .catch((error) => {
        console.log("error ===> ", error);
        //NotificationManager.error(error.response.data.message);
      });
  };

  const getAllSociety = () => {
    axios
      .get(apiUrl)
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
      .post(cudAPIUrl, inputs)
      .then((response) => {
        console.log("response =======>", response.data);
        NotificationManager.success("Society Added Successfully!");
        setInputs({});
        setIsNew(false);
        getAllSociety();
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
      <ListContainer
        heading={"Society List"}
        dataList={societyList}
        addNew={handleState}
        btnText={"Add New Society"}
      />
      <ModalDialog
        show={isNew}
        calltoClose={handleState}
        headerText={"Add New Society"}
        onSaveButtonClick={addSociety}
      >

        <div className="row">
          <div className="col-12">
            <div className="form-group">
              <label className="control-label mb-1">Society Name</label>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Society Name"
                  name="name"
                  value={inputs.name || ""}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <div className="form-group">
              <label className="control-label mb-1">President Name</label>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter President Name"
                  name="presidentName"
                  value={inputs.presidentName || ""}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="form-group">
              <label className="control-label mb-1">
                Registration Number
              </label>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Registration Number"
                  name="registrationNo"
                  value={inputs.registrationNo || ""}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
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
                  type="email"
                  className="form-control"
                  placeholder="Enter Email"
                  name="email"
                  value={inputs.email || ""}
                  onChange={(e) => {
                    handleChange(e);
                  }}
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
      </ModalDialog>
    </div>
  );
};

export default Society;

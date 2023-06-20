import { useState, useEffect } from "react";
import axios from "axios";
import { NotificationManager } from "react-notifications";
import "./SiteUnits.css";
import ListContainer from "../Utils/ListContainer/ListContainer";
import ModalDialog from "../Utils/ModalDialog/ModalDialog";

function SiteUnits() {
  const [isNew, setIsNew] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [siteUnitsList, setSiteUnitsList] = useState([]);
  const [inputs, setInputs] = useState({});

  useEffect(() => {
    getAllSiteUnits();
  }, []);

  const handleState = (value) => {
    setIsNew(value);
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const getAllSiteUnits = () => {
    axios
      .get("http://localhost:3001/api/siteUnits")
      .then((response) => {
        setSiteUnitsList(response.data);
      })
      .catch((error) => {
        console.log("error ===> ", error);
        //NotificationManager.error(error.response.data.message);
      });
  };

  const addSiteUnits = () => {
    axios
      .post("http://localhost:3001/api/siteUnits", inputs)
      .then((response) => {
        console.log("response =======>", response.data);
        NotificationManager.success("Site Added Successfully");
      })
      .catch((error) => {
        console.log("error ===> ", error);
        //NotificationManager.error(error.response.data.message);
      });
  };

  const updateSiteUnits = () => {
    axios
      .post("http://localhost:3001/api/siteUnits", inputs)
      .then((response) => {
        console.log("response =======>", response.data);
        // NotificationManager.success(response.data.message);
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
        heading={"Site Unit List"}
        dataList={siteUnitsList}
        addNew={handleState}
        btnText={"Add New Society"}
      />
      <ModalDialog
        show={isNew}
        calltoClose={handleState}
        headerText={"Add New Site Unit"}
      >
        <div className="card">
          <div className="card-body">
            <div className="card-title">
              <h3 className="text-center title-2">Site Units Details</h3>
            </div>
            <hr />
            <div className="form-group">
              <label className="control-label mb-1">Site Units Name/No</label>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Site Unit Name/No"
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
                  <label className="control-label mb-1">Floor</label>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter floor details"
                      name="floor"
                      value={inputs.floor || ""}
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
                      <option value={inputs.site || ""}>Volvo</option>
                      <option value={inputs.site || ""}>Saab</option>
                      <option value={inputs.site || ""}>Mercedes</option>
                      <option value={inputs.site || ""}>Audi</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-3"></div>
            <div>
              <button
                type="submit"
                className="btn btn-md btn-info"
                onClick={isUpdate ? updateSiteUnits : addSiteUnits}
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

export default SiteUnits;

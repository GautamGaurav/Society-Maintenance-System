import { useState, useEffect } from "react";
import { NotificationManager } from "react-notifications";
import axios from "axios";
import "./Sites.css";
import ListContainer from "../Utils/ListContainer/ListContainer";
import ModalDialog from "../Utils/ModalDialog/ModalDialog";
import { Textbox, Select } from "../Layout";

function Sites() {
  const [isNew, setIsNew] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [siteList, setSiteList] = useState([]);
  const [builderList, setBuilderList] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    builder: '',
    address: '',
    state: '',
    pincode: '',
  });

  useEffect(() => {
    getAllSites();
    getAllBuilders();
  }, [siteList]);

  const handleState = (value) => {
    setIsNew(value);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
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

  const addSite = () => {
    axios
      .post("http://localhost:3001/api/site", formData)
      .then((response) => {
        NotificationManager.success("New Site Added Successfully!");
        setIsNew(false);
        getAllSites();
      })
      .catch((error) => {
        console.log("error ===> ", error);
        NotificationManager.error(
          "Some error occurred, please check console log"
        );
      });
  };

  const updateSite = () => {
    axios
      .post("http://localhost:3001/api/site", formData)
      .then((response) => {
        console.log("response =======>", response.data);
        NotificationManager.success(response.data.message);
      })
      .catch((error) => {
        console.log("error ===> ", error);
        //NotificationManager.error(error.response.data.message);
      });
  };

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
        headerText={isUpdate ? "Update Site" : "Add New Site"}
        title={"Site Details"}
        onSaveButtonClick={isUpdate ? updateSite : addSite}
      >
        <div className="row">
          <Textbox
            type="text"
            placeholder="Enter Site Name"
            name="name"
            value={formData.name}
            label={"Site Name"}
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
        <div className="row">
          <Select
            name="builder"
            id="builder"
            onChange={(e) => {
              handleChange(e);
            }}
            data={builderList}
            placeholder={"--Select Builder--"}
          />
        </div>
        <div className="row">
          <Textbox
            label="Address"
            type="text"
            placeholder="Enter Address"
            name="address"
            value={formData.address}
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
        <div className="row">
          <div className="col-6">
            <Textbox
              label="City"
              type="text"
              className="form-control"
              placeholder="Enter City"
              name="city"
              value={formData.city}
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>
          <div className="col-6">
            <Textbox
              label="State"
              type="text"
              className="form-control"
              placeholder="Enter State"
              name="state"
              value={formData.state}
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <Textbox
              label="Pin Code"
              type="text"
              className="form-control"
              placeholder="Enter Pin Code"
              name="pincode"
              value={formData.pincode}
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>
        </div>
      </ModalDialog>
    </div >
  );
}

export default Sites;

import { useState, useEffect } from "react";
import axios from "axios";
import { NotificationManager } from "react-notifications";
import "./Owners.css";
import ListContainer from "../Utils/ListContainer/ListContainer";
import ModalDialog from "../Utils/ModalDialog/ModalDialog";
import { Select, Textbox } from "../Layout";

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
        title={"Owners Details"}
      >
        <div className="row">
          <div className="col-6">
            <Textbox
              label="Owners Name"
              type="text"
              placeholder="Enter Owners Name"
              name="name"
              onChange={(e) => {
                handleChange(e);
              }}
              value={inputs.name || ""}
            />
          </div>
          <div className="col-6">
            <Select
              placeholder="--Select Site--"
              label="Select Site"
              name="site"
              id="cars"
              onChange={(e) => {
                handleChange(e);
              }}
              data={siteList}
            />
          </div>
        </div >
        <div className="row">
          <div className="col-6">
            <Select
              placeholder="--Select Site Unit--"
              label="Select Site Unit"
              name="siteUnit"
              onChange={(e) => {
                handleChange(e);
              }}
              data={siteList}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <Textbox
              label="Email"
              type="text"
              placeholder="Enter Owners Email"
              name="email"
              onChange={(e) => {
                handleChange(e);
              }}
              value={inputs.email || ""}
            />
          </div>
          <div className="col-6">
            <Textbox
              label="Contact No"
              type="text"
              placeholder="Enter Owners Contact No"
              name="contactNo"
              onChange={(e) => {
                handleChange(e);
              }}
              value={inputs.contactNo || ""}
            />
          </div>
        </div >
        <div className="row">
          <Textbox
            label="Address"
            type="text"
            placeholder="Enter Address"
            name="address"
            onChange={(e) => {
              handleChange(e);
            }}
            value={inputs.address || ""}
          />
        </div>
        <div className="row">
          <div className="col-6">
            <Textbox
              label="City"
              type="text"
              placeholder="Enter City"
              name="city"
              onChange={(e) => {
                handleChange(e);
              }}
              value={inputs.city || ""}
            />
          </div>
          <div className="col-6">
            <Textbox
              label="State"
              type="text"
              placeholder="Enter State"
              name="state"
              onChange={(e) => {
                handleChange(e);
              }}
              value={inputs.state || ""}
            />
          </div>
        </div>
        <div className="col-6">
          <Textbox
            label="Pin Code"
            type="text"
            placeholder="Enter Pin Code"
            name="pincode"
            onChange={(e) => {
              handleChange(e);
            }}
            value={inputs.pincode || ""}
          />
        </div>
      </ModalDialog>
    </div >
  );
};

export default Owners;

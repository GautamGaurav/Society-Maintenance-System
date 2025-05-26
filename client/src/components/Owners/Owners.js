import { useState, useEffect } from "react";
import axios from "axios";
import { NotificationManager } from "react-notifications";
import "./Owners.css";
import ListContainer from "../Utils/ListContainer/ListContainer";
import ModalDialog from "../Utils/ModalDialog/ModalDialog";
import { Select, Textbox } from "../Layout";
import { api } from "../../constants/api";
import { getAllBuilders, getAllOwners, getAllSites, getAllSiteUnits } from "../../Utils";

const Owners = () => {
  const [isNew, setIsNew] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [owners, setOwners] = useState([]);
  const [sites, setSites] = useState([]);
  const [siteUnits, setSiteUnits] = useState([]);
  const [builders, setBuilders] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    builder: '',
    site: '',
    siteUnit: '',
    dateOfRegistry: '',
    email: '',
    contactNo: '',
    address: '',
    city: '',
    state: '',
    pincode: ''
  });

  useEffect(() => {
    getAllOwners().then((owners) => { setOwners(owners); });
    getAllSites().then((sites) => { setSites(sites); });
    getAllSiteUnits().then((siteUnits) => { setSiteUnits(siteUnits); });
    getAllBuilders().then((builders) => { setBuilders(builders); });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleState = (value) => {
    setIsNew(value);
  };

  const addOwner = () => {
    axios
      .post(api.owner.CRUD, formData)
      .then((response) => {
        console.log("response =======>", response.data);
        NotificationManager.success("Owners Added Successfully!");
        setIsNew(false);
        getAllOwners().then((owners) => { setOwners(owners); });
      })
      .catch((error) => {
        console.log("error ===> ", error);
        NotificationManager.error(error.response.data.message);
      });
  };

  const updateOwner = () => {
    axios
      .post(api.owner.CRUD, formData)
      .then((response) => {
        console.log("response =======>", response.data);
        NotificationManager.success(response.data.message);
      })
      .catch((error) => {
        console.log("error ===> ", error);
        NotificationManager.error(error.response.data.message);
      });
  };

  const onRowClick = (e) => {
    console.log("Event ==============> ", e.data)
    setIsNew(true);
    setFormData(e.data);
  }

  return (
    <div>
      <ListContainer
        onRowClick={onRowClick}
        heading={"Owners List"}
        dataList={owners}
        addNew={handleState}
        btnText={"Add New Owners"}
      />
      <ModalDialog
        show={isNew}
        calltoClose={handleState}
        headerText={"Add New Owners"}
        title={"Owners Details"}
        onSaveButtonClick={isUpdate ? updateOwner : addOwner}
        saveButtonText={isUpdate ? "Update" : "Save"}
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
              value={formData.name}
            />
          </div>
          <div className="col-6">
            <Select
              placeholder="--Select Builder--"
              label="Select Builder"
              name="builder"
              onChange={(e) => {
                handleChange(e);
              }}
              data={builders}
              value={formData.builder}
            />
          </div>
        </div >
        <div className="row">
          <div className="col-6">
            <Select
              placeholder="--Select Site--"
              label="Select Site"
              name="site"
              onChange={(e) => {
                handleChange(e);
              }}
              data={sites}
              value={formData.site}
            />
          </div>
          <div className="col-6">
            <Select
              placeholder="--Select Site Unit--"
              label="Select Site Unit"
              name="siteUnit"
              onChange={(e) => {
                handleChange(e);
              }}
              data={siteUnits}
              value={formData.siteUnit}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <Textbox
              label="Date Of Registry"
              type="date"
              placeholder="Enter Date Of Registry"
              name="dateOfRegistry"
              onChange={(e) => {
                handleChange(e);
              }}
              value={formData.dateOfRegistry}
            />
          </div>
          <div className="col-6">
            <Textbox
              label="Date Of Possession"
              type="date"
              placeholder="Enter Date of Possession"
              name="dateOfPossession"
              onChange={(e) => {
                handleChange(e);
              }}
              value={formData.dateOfPossession}
            />
          </div>
        </div >
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
              value={formData.email}
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
              value={formData.contactNo}
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
            value={formData.address}
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
              value={formData.city}
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
              value={formData.state}
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
            value={formData.pincode}
          />
        </div>
      </ModalDialog>
    </div >
  );
};

export default Owners;

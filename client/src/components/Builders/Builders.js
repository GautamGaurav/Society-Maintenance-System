import { useState, useEffect } from "react";
import axios from "axios";
import { NotificationManager } from "react-notifications";
import "./Builders.css";
import ListContainer from "../Utils/ListContainer/ListContainer";
import ModalDialog from "../Utils/ModalDialog/ModalDialog";
import { Textbox, Button } from "../Layout";
import { api } from "../../constants/api";
import { getAllBuilders } from "../../Utils";


const Builders = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    gstn: '',
    reraRegistrationNumber: '',
    contactNo: '',
    address: '',
    name: '',
    state: '',
    pincode: '',
  });
  const [isNew, setIsNew] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [builderList, setBuilderList] = useState([]);

  useEffect(() => {
    getAllBuilders()
      .then((builders) => {
        setBuilderList(builders);
      })
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

  const addBuilder = () => {
    axios
      .post(api.builder.CRUD, formData)
      .then((response) => {
        console.log("response =======>", response.data);
        NotificationManager.success("Builder Added Successfully!");
        setIsNew(false);
        getAllBuilders();
      })
      .catch((error) => {
        console.log("error ===> ", error);
        //NotificationManager.error(error.response.data.message);
      });
  };

  const updateBuilder = () => {
    axios
      .post(api.builder.CRUD, formData)
      .then((response) => {
        console.log("response =======>", response.data);
        // NotificationManager.success(response.data.message);
      })
      .catch((error) => {
        console.log("error ===> ", error);
        //NotificationManager.error(error.response.data.message);
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
        heading={"Builder List"}
        dataList={builderList}
        addNew={handleState}
        btnText={"Add New Builder"}
      />
      <ModalDialog
        show={isNew}
        calltoClose={handleState}
        headerText={"Add New Builder"}
        title={"Builder Details"}
        onSaveButtonClick={isUpdate ? updateBuilder : addBuilder}
        saveButtonText={isUpdate ? "Update" : "Save"}
      >
        <div className="row">
          <Textbox
            type="text"
            className="form-control"
            placeholder="Enter Builder Name"
            label="Builder Name"
            labelClass={"control-label mb-1"}
            name="name"
            onChange={(e) => {
              handleChange(e);
            }}
            value={formData.name}
          />
        </div>
        <div className="row">
          <div className="col-6">
            <Textbox
              type="text"
              className="form-control"
              placeholder="Enter GSTN No"
              name="gstn"
              label="GSTN No."
              onChange={(e) => {
                handleChange(e);
              }}
              value={formData.gstn}
            />
          </div>
          <div className="col-6">
            <Textbox
              type="text"
              label="RERA Registration No"
              className="form-control"
              placeholder="Enter RERA Registration No"
              name="reraRegistrationNumber"
              onChange={(e) => {
                handleChange(e);
              }}
              value={formData.reraRegistrationNumber}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <Textbox
              type="text"
              className="form-control"
              placeholder="Enter Builder Email"
              name="email"
              label="Email"
              onChange={(e) => {
                handleChange(e);
              }}
              value={formData.email}
            />
          </div>
          <div className="col-6">
            <Textbox
              type="text"
              label="Contact No"
              className="form-control"
              placeholder="Enter Builder Contact No"
              name="contactNo"
              onChange={(e) => {
                handleChange(e);
              }}
              value={formData.contactNo}
            />
          </div>
        </div>
        <div className="row">
          <Textbox
            type="textarea"
            className="form-control"
            placeholder="Enter Address"
            name="address"
            onChange={(e) => {
              handleChange(e);
            }}
            label="Address"
            value={formData.address}
          />
        </div>
        <div className="row">
          <div className="col-6">
            <Textbox
              type="text"
              className="form-control"
              placeholder="Enter City"
              name="city"
              onChange={(e) => {
                handleChange(e);
              }}
              label="City"
              value={formData.city}
            />
          </div>
          <div className="col-6">
            <Textbox
              type="text"
              label="State"
              className="form-control"
              placeholder="Enter State"
              name="state"
              onChange={(e) => {
                handleChange(e);
              }}
              value={formData.state}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <Textbox
              type="text"
              className="form-control"
              placeholder="Enter Pin Code"
              name="pincode"
              onChange={(e) => {
                handleChange(e);
              }}
              label="Pin Code"
              value={formData.pincode}
            />
          </div>
        </div>
      </ModalDialog>
    </div>
  );
};

export default Builders;

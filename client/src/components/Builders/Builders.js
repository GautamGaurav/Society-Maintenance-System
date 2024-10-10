import { useState, useEffect } from "react";
import axios from "axios";
import { NotificationManager } from "react-notifications";
import "./Builders.css";
import ListContainer from "../Utils/ListContainer/ListContainer";
import ModalDialog from "../Utils/ModalDialog/ModalDialog";
import { Textbox, Button } from "../Layout";
import apiUrl from "../../constants/apiURL"


const Builders = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    owner: '',
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
  const [inputs, setInputs] = useState({});

  useEffect(() => {
    getAllBuilders();
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

  const getAllBuilders = () => {
    axios
      .get(apiUrl.builderAPIUrl)
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
      .post(apiUrl.crudBuilderAPIUrl, inputs)
      .then((response) => {
        console.log("response =======>", response.data);
        NotificationManager.success("Builder Added Successfully!");
        setInputs({});
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
      .post(apiUrl.crudBuilderAPIUrl, {})
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
      >
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
          value={inputs.name || ""}
        ></Textbox>
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
              value={inputs.email || ""}
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
              value={inputs.contactNo || ""}
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
            value={inputs.address || ""}
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
              value={inputs.city || ""}
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
              value={inputs.state || ""}
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
              value={inputs.pincode || ""}
            />
          </div>
        </div>
        <div className="mt-3" />
        <div>
          <Button
            onClick={isUpdate ? updateBuilder : addBuilder}
            text={isUpdate ? "Update" : "Save"}
            className="btn-info"
          />
          <Button
            onClick={cancel}
            className="btn-danger ml-15"
            text="Cancel"
          />
        </div>
      </ModalDialog>
    </div>
  );
};

export default Builders;

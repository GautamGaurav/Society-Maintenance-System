import { useState, useEffect } from "react";
import axios from "axios";
import { NotificationManager } from "react-notifications";
import "./SiteUnits.css";
import ListContainer from "../Utils/ListContainer/ListContainer";
import ModalDialog from "../Utils/ModalDialog/ModalDialog";
import { Select, Textbox } from "../Layout";
import { SiteOptions, FloorOptions, RoomLayout } from "../../constants/data";
import { getAllSiteUnits, getAllSites, } from "../../Utils";
import { api } from "../../constants/api";


function SiteUnits() {
  const [isNew, setIsNew] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [siteUnitsList, setSiteUnitsList] = useState([]);
  const [siteList, setSiteList] = useState([]);
  const [formData, setFormData] = useState({
    site: '',
    name: '',
    type: '',
    floor: '',
    roomLayout: '',
    areaSize: ''
  });

  useEffect(() => {
    getAllSiteUnits().then((siteUnits) => { setSiteUnitsList(siteUnits); });
    getAllSites().then((sites) => { setSiteList(sites); });
  }, []);


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

  const addSiteUnit = () => {
    axios
      .post(api.siteUnit.CRUD, formData)
      .then((response) => {
        getAllSiteUnits().then((siteUnits) => { setSiteUnitsList(siteUnits); });
        getAllSites().then((sites) => { setSiteList(sites); });
        setIsNew(false);
        console.log("response =======>", response.data);
        NotificationManager.success("Site Added Successfully");
      })
      .catch((error) => {
        console.log("error ===> ", error);
        //NotificationManager.error(error.response.data.message);
      });
  };

  const updateSiteUnit = () => {
    axios
      .post(api.siteUnit.CRUD, formData)
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
        heading={"Site Unit List"}
        dataList={siteUnitsList}
        hideColumn={['id']}
        addNew={handleState}
        btnText={"Add New Site Unit"}
      />
      <ModalDialog
        show={isNew}
        calltoClose={handleState}
        headerText={"Add New Site Unit"}
        title={"Site Details"}
        onSaveButtonClick={isUpdate ? updateSiteUnit : addSiteUnit}
      >
        <div className="row">
          <div className="col-6">
            <Select
              label="Select Site"
              name="site"
              placeholder={"--Select Site--"}
              onChange={(e) => {
                handleChange(e);
              }}
              data={siteList}
            />
          </div>
          <div className="col-6">
            <Textbox
              label="Site Units Name/No"
              type="text"
              className="form-control"
              placeholder="Enter Site Unit Name/No"
              name="name"
              value={formData.name}
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <Select
              label="Select Site Unit Type"
              name="type"
              className="form-control"
              onChange={(e) => {
                handleChange(e);
              }}
              placeholder={"--Select Site Unit Type--"}
              data={SiteOptions}
            />
          </div>
          <div className="col-6">
            <Select
              label="Select Floor"
              name="floor"
              className="form-control"
              onChange={(e) => {
                handleChange(e);
              }}
              placeholder={"--Select Floor--"}
              data={FloorOptions}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <Select
              label="Select Rooms Layout"
              name="roomLayout"
              className="form-control"
              onChange={(e) => {
                handleChange(e);
              }}
              placeholder={"--Select Room Layout Type--"}
              data={RoomLayout}
            />
          </div>
          <div className="col-6">
            <Textbox
              label="Area Size"
              type="text"
              className="form-control"
              placeholder="Enter Area Size in Sq Ft"
              name="areaSize"
              value={formData.areaSize}
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>
        </div>
      </ModalDialog >
    </div >
  );
}

export default SiteUnits;

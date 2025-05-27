import './Budget.css';


import { useState, useEffect } from "react";
import { NotificationManager } from "react-notifications";
import axios from "axios";
import ListContainer from "../Utils/ListContainer/ListContainer";
import ModalDialog from "../Utils/ModalDialog/ModalDialog";
import { Select, Textbox } from "../Layout";
import { getAllBudget, getAllSocieties, getSocietyDetailsById } from "../../Utils";
import { api } from "../../constants/api";
import { FrequencyData } from "../../constants/data"

const Budget = () => {
  const [isNew, setIsNew] = useState(false);
  const [societyList, setSocietyList] = useState([]);
  const [societyDetail, setSocietyDetail] = useState([]);
  const [budgetList, setBudgetList] = useState([]);
  const [formData, setFormData] = useState({
    society: '',
    componentName: '',
    componentDetail: '',
    expenditureAmount: '',
    payFrequency: '',
    assignedAgency: '',
  });

  useEffect(() => {
    getAllBudget().then((budgetList) => {
      setBudgetList(budgetList);
    });
  }, []);

  const handleState = (value) => {
    getAllSocieties().then((societyList) => { setSocietyList(societyList); });
    setIsNew(value);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name !== null && name === 'society' && value !== null && value !== undefined) {
      getSocietyDetailsById(value).then((societyDetail) => {
        setSocietyDetail(societyDetail);
      });
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  };


  const addBudgetDetail = () => {
    axios
      .post(api.budget.CRUD, formData)
      .then((response) => {
        NotificationManager.success(response.data.message);
        setIsNew(false);
        getAllBudget().then((budgetList) => { setBudgetList(budgetList); });
      })
      .catch((error) => {
        NotificationManager.error(error.response.data.message);
      });
  };

  const updateBudgetDetail = () => {
    axios
      .post(api.budget.CRUD, formData)
      .then((response) => {
        console.log("response =======>", response.data);
        NotificationManager.success("Society Added Successfully!");
        setIsNew(false);
        //getAllSocieties();
      })
      .catch((error) => {
        //console.log("error ===> ", error);
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
        heading={"Budget List"}
        dataList={budgetList}
        addNew={handleState}
        btnText={"Add New Budget Component"}
        onRowClick={onRowClick}
      />
      <ModalDialog
        show={isNew}
        calltoClose={handleState}
        headerText={"Add New Budget"}
        title={"Budget Detail"}
        onSaveButtonClick={isNew ? addBudgetDetail : updateBudgetDetail}
      >
        <div className="row">
          <div className="col-6">
            <Select
              placeholder="--Select Society--"
              label="Select Society"
              name="society"
              onChange={(e) => {
                handleChange(e);
              }}
              data={societyList}
              value={formData.society}
            />
          </div>
          <div className="col-6">
            <Textbox
              label="Total Site Unit"
              type="number"
              placeholder="Total Site Unit"
              name="totalSiteUnit"
              disabled={true}
              value={societyDetail.siteUnitCount}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <Textbox
              label="Site Name"
              type="text"
              placeholder="Site Name"
              name="siteName"
              disabled={true}
              value={societyDetail.siteName}
            />
          </div>
          <div className="col-6">
            <Textbox
              label="President"
              type="text"
              className="form-control"
              placeholder="President Name"
              name="presidentName"
              disabled={true}
              value={societyDetail.presidentName}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <hr />
          </div>
        </div >
        <div className="row">
          <div className="col-6">
            <Textbox
              label="Component Name"
              type="text"
              placeholder="Enter Component Name"
              name="componentName"
              value={formData.componentName}
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>
        </div >
        <div className="row">
          <Textbox
            label="Component Details"
            placeholder="Enter Component Details"
            name="componentDetail"
            value={formData.componentDetail}
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
        <div className="row">
          <div className="col-3">
            <Textbox
              label="Expenditure"
              placeholder="Enter Expenditure Amount"
              name="expenditureAmount"
              value={formData.expenditureAmount}
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>
          <div className="col-3">
            <Select
              label="Pay Frequency"
              placeholder="--Select Frequency--"
              name="payFrequency"
              data={FrequencyData}
              value={formData.payFrequency}
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>
          <div className="col-6">
            <Textbox
              label="Assigned Agency"
              placeholder="Enter Assigned Agency"
              name="assignedAgency"
              value={formData.assignedAgency}
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>
        </div>
      </ModalDialog >
    </div >
  );
};

export default Budget;
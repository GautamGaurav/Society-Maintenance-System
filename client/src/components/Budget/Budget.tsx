import './Budget.css';
import React, { useState, useEffect } from 'react';
import { NotificationManager } from 'react-notifications';
import axios from 'axios';
import ListContainer from '../Utils/ListContainer';
import ModalDialog from '../Utils/ModalDialog';
import { Select, Textbox } from '../Layout';
import { getAllBudget, getAllSocieties, getSocietyDetailsById } from '../../Utils';
import { api } from '../../constants/api';
import { FrequencyData } from '../../constants/data';
import { Society } from '../../types/models';

interface BudgetForm {
  society?: number | string;
  componentName?: string;
  componentDetail?: string;
  expenditureAmount?: string | number;
  payFrequency?: string;
  assignedAgency?: string;
}

interface SocietyDetail {
  siteUnitCount?: number;
  siteName?: string;
  presidentName?: string;
}

const Budget: React.FC = () => {
  const [isNew, setIsNew] = useState<boolean>(false);
  const [societyList, setSocietyList] = useState<Society[]>([]);
  const [societyDetail, setSocietyDetail] = useState<SocietyDetail>({});
  const [budgetList, setBudgetList] = useState<any[]>([]);
  const [formData, setFormData] = useState<BudgetForm>({
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

  const handleState = (value: boolean) => {
    getAllSocieties().then((societyList) => {
      setSocietyList(societyList as Society[]);
    });
    setIsNew(value);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target as any;

    if (name !== null && name === 'society' && value !== null && value !== undefined) {
      getSocietyDetailsById(Number(value)).then((societyDetail) => {
        setSocietyDetail(societyDetail);
      });
    }

    setFormData({
      ...formData,
      [name]: value,
    } as BudgetForm);
  };

  const addBudgetDetail = () => {
    axios
      .post(api.budget.CRUD, formData)
      .then((response) => {
        NotificationManager.success(response.data.message);
        setIsNew(false);
        getAllBudget().then((budgetList) => {
          setBudgetList(budgetList);
        });
      })
      .catch((error) => {
        NotificationManager.error(error?.response?.data?.message || 'Error');
      });
  };

  const updateBudgetDetail = () => {
    axios
      .post(api.budget.CRUD, formData)
      .then((response) => {
        NotificationManager.success('Society Added Successfully!');
        setIsNew(false);
      })
      .catch((error) => {
        NotificationManager.error(error?.response?.data?.message || 'Error');
      });
  };

  const onRowClick = (e: any) => {
    setIsNew(false);
    setFormData(e.data);
  };

  return (
    <div>
      <ListContainer heading={'Budget List'} dataList={budgetList} addNew={handleState} btnText={'Add New Budget Component'} onRowClick={onRowClick} />
      <ModalDialog show={isNew} calltoClose={handleState} headerText={'Add New Budget Component'} title={'Budget Detail'} onSaveButtonClick={isNew ? addBudgetDetail : updateBudgetDetail}>
        <div className="row">
          <div className="col-6">
            <Select placeholder="--Select Society--" label="Select Society" name="society" onChange={handleChange} data={societyList} value={formData.society} />
          </div>
          <div className="col-6">
            <Textbox label="Total Site Unit" type="number" placeholder="Total Site Unit" name="totalSiteUnit" disabled={true} value={societyDetail.siteUnitCount} />
          </div>
        </div>

        <div className="row">
          <div className="col-6">
            <Textbox label="Site Name" type="text" placeholder="Site Name" name="siteName" disabled={true} value={societyDetail.siteName} />
          </div>
          <div className="col-6">
            <Textbox label="President" type="text" className="form-control" placeholder="President Name" name="presidentName" disabled={true} value={societyDetail.presidentName} />
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <hr />
          </div>
        </div>

        <div className="row">
          <div className="col-6">
            <Textbox label="Component Name" type="text" placeholder="Enter Component Name" name="componentName" value={formData.componentName} onChange={handleChange} />
          </div>
        </div>

        <div className="row">
          <Textbox label="Component Details" placeholder="Enter Component Details" name="componentDetail" value={formData.componentDetail} onChange={handleChange} />
        </div>

        <div className="row">
          <div className="col-3">
            <Textbox label="Expenditure" placeholder="Enter Expenditure Amount" name="expenditureAmount" value={formData.expenditureAmount} onChange={handleChange} />
          </div>
          <div className="col-3">
            <Select label="Pay Frequency" placeholder="--Select Frequency--" name="payFrequency" data={FrequencyData} value={formData.payFrequency} onChange={handleChange} />
          </div>
          <div className="col-6">
            <Textbox label="Assigned Agency" placeholder="Enter Assigned Agency" name="assignedAgency" value={formData.assignedAgency} onChange={handleChange} />
          </div>
        </div>
      </ModalDialog>
    </div>
  );
};

export default Budget;

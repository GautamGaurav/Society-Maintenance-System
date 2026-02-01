import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { NotificationManager } from 'react-notifications';
import './Owners.css';
import ListContainer from '../Utils/ListContainer';
import ModalDialog from '../Utils/ModalDialog';
import { Select, Textbox } from '../Layout';
import { api } from '../../constants/api';
import { getAllBuilders, getAllOwners, getAllSites, getAllSiteUnits } from '../../Utils';
import { Owner, Site, SiteUnit } from '../../types/models';

const Owners: React.FC = () => {
  const [isNew, setIsNew] = useState<boolean>(false);
  const [isUpdate, setIsUpdate] = useState<boolean>(false);
  const [owners, setOwners] = useState<Owner[]>([]);
  const [sites, setSites] = useState<Site[]>([]);
  const [siteUnits, setSiteUnits] = useState<SiteUnit[]>([]);
  const [builders, setBuilders] = useState<any[]>([]);
  const [formData, setFormData] = useState<any>({
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target as any;
    setFormData({ ...formData, [name]: value });
  };

  const handleState = (value: boolean) => { setIsNew(value); };

  const addOwner = () => {
    axios.post(api.owner.CRUD, formData).then((response) => {
      NotificationManager.success('Owners Added Successfully!');
      setIsNew(false);
      getAllOwners().then((owners) => { setOwners(owners); });
    }).catch((error) => {
      NotificationManager.error(error?.response?.data?.message || 'Error');
    });
  };

  const updateOwner = () => {
    axios.post(api.owner.CRUD, formData).then((response) => {
      NotificationManager.success(response.data.message);
    }).catch((error) => {
      NotificationManager.error(error?.response?.data?.message || 'Error');
    });
  };

  const onRowClick = (e: any) => {
    setIsNew(true);
    setFormData(e.data);
  };

  return (
    <div>
      <ListContainer onRowClick={onRowClick} heading={'Owners List'} dataList={owners} addNew={handleState} btnText={'Add New Owners'} />
      <ModalDialog show={isNew} calltoClose={handleState} headerText={'Add New Owners'} title={'Owners Details'} onSaveButtonClick={isUpdate ? updateOwner : addOwner} saveButtonText={isUpdate ? 'Update' : 'Save'}>
        <div className="row">
          <div className="col-6">
            <Textbox label="Owners Name" type="text" placeholder="Enter Owners Name" name="name" onChange={handleChange} value={formData.name} />
          </div>
          <div className="col-6">
            <Select placeholder="--Select Builder--" label="Select Builder" name="builder" onChange={handleChange} data={builders} value={formData.builder} />
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <Select placeholder="--Select Site--" label="Select Site" name="site" onChange={handleChange} data={sites} value={formData.site} />
          </div>
          <div className="col-6">
            <Select placeholder="--Select Site Unit--" label="Select Site Unit" name="siteUnit" onChange={handleChange} data={siteUnits} value={formData.siteUnit} />
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <Textbox label="Date Of Registry" type="date" format="dd/mm/yyyy" placeholder="Enter Date Of Registry" name="dateOfRegistry" onChange={handleChange} value={formData.dateOfRegistry} />
          </div>
          <div className="col-6">
            <Textbox label="Date Of Possession" type="date" format="dd/mm/yyyy" placeholder="Enter Date of Possession" name="dateOfPossession" onChange={handleChange} value={formData.dateOfPossession} />
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <Textbox label="Email" type="text" placeholder="Enter Owners Email" name="email" onChange={handleChange} value={formData.email} />
          </div>
          <div className="col-6">
            <Textbox label="Contact No" type="text" placeholder="Enter Owners Contact No" name="contactNo" onChange={handleChange} value={formData.contactNo} />
          </div>
        </div>
        <div className="row">
          <Textbox label="Address" type="text" placeholder="Enter Address" name="address" onChange={handleChange} value={formData.address} />
        </div>
        <div className="row">
          <div className="col-6">
            <Textbox label="City" type="text" placeholder="Enter City" name="city" onChange={handleChange} value={formData.city} />
          </div>
          <div className="col-6">
            <Textbox label="State" type="text" placeholder="Enter State" name="state" onChange={handleChange} value={formData.state} />
          </div>
        </div>
        <div className="col-6">
          <Textbox label="Pin Code" type="text" placeholder="Enter Pin Code" name="pincode" onChange={handleChange} value={formData.pincode} />
        </div>
      </ModalDialog>
    </div>
  );
};

export default Owners;

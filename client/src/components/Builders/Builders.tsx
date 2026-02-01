import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { NotificationManager } from 'react-notifications';
import './Builders.css';
import ListContainer from '../Utils/ListContainer';
import ModalDialog from '../Utils/ModalDialog';
import { Textbox, Button } from '../Layout';
import { api } from '../../constants/api';
import { getAllBuilders } from '../../Utils';
import { Builder } from '../../types/models';

const Builders: React.FC = () => {
  const [formData, setFormData] = useState<Partial<Builder>>({
    name: '',
    email: '',
    gstn: '',
    reraRegistrationNumber: '',
    contactNo: '',
    address: '',
    state: '',
    pincode: '',
  });

  const [isNew, setIsNew] = useState<boolean>(false);
  const [isUpdate, setIsUpdate] = useState<boolean>(false);
  const [builderList, setBuilderList] = useState<Builder[]>([]);

  useEffect(() => {
    getAllBuilders().then((builders) => setBuilderList(builders));
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target as any;
    setFormData({ ...formData, [name]: value });
  };

  const handleState = (value: boolean) => {
    setIsNew(value);
  };

  const addBuilder = () => {
    axios
      .post(api.builder.CRUD, formData)
      .then((response) => {
        NotificationManager.success('Builder Added Successfully!');
        setIsNew(false);
        getAllBuilders().then((builders) => setBuilderList(builders));
      })
      .catch((error) => {
        console.log('error ===> ', error);
      });
  };

  const updateBuilder = () => {
    axios
      .post(api.builder.CRUD, formData)
      .then((response) => {
        // NotificationManager.success(response.data.message);
      })
      .catch((error) => {
        console.log('error ===> ', error);
      });
  };

  const onRowClick = (e: any) => {
    setIsNew(true);
    setFormData(e.data);
  };

  return (
    <div>
      <ListContainer onRowClick={onRowClick} heading={'Builder List'} dataList={builderList} addNew={handleState} btnText={'Add New Builder'} hideColumn={['id']} />
      <ModalDialog show={isNew} calltoClose={handleState} headerText={'Add New Builder'} title={'Builder Details'} onSaveButtonClick={isUpdate ? updateBuilder : addBuilder} saveButtonText={isUpdate ? 'Update' : 'Save'}>
        <div className="row">
          <Textbox type="text" className="form-control" placeholder="Enter Builder Name" label="Builder Name" labelClass={'control-label mb-1'} name="name" onChange={handleChange} value={formData.name} />
        </div>
        <div className="row">
          <div className="col-6">
            <Textbox type="text" className="form-control" placeholder="Enter GSTN No" name="gstn" label="GSTN No." onChange={handleChange} value={formData.gstn} />
          </div>
          <div className="col-6">
            <Textbox type="text" label="RERA Registration No" className="form-control" placeholder="Enter RERA Registration No" name="reraRegistrationNumber" onChange={handleChange} value={formData.reraRegistrationNumber} />
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <Textbox type="text" className="form-control" placeholder="Enter Builder Email" name="email" label="Email" onChange={handleChange} value={formData.email} />
          </div>
          <div className="col-6">
            <Textbox type="text" label="Contact No" className="form-control" placeholder="Enter Builder Contact No" name="contactNo" onChange={handleChange} value={formData.contactNo} />
          </div>
        </div>
        <div className="row">
          <Textbox type="textarea" className="form-control" placeholder="Enter Address" name="address" onChange={handleChange} label="Address" value={formData.address as any} />
        </div>
        <div className="row">
          <div className="col-6">
            <Textbox type="text" className="form-control" placeholder="Enter City" name="city" onChange={handleChange} label="City" value={formData.city} />
          </div>
          <div className="col-6">
            <Textbox type="text" label="State" className="form-control" placeholder="Enter State" name="state" onChange={handleChange} value={formData.state} />
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <Textbox type="text" className="form-control" placeholder="Enter Pin Code" name="pincode" onChange={handleChange} label="Pin Code" value={formData.pincode} />
          </div>
        </div>
      </ModalDialog>
    </div>
  );
};

export default Builders;

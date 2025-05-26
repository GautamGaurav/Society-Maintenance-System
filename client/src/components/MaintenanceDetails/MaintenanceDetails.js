import { useState, useEffect } from "react";
import { NotificationManager } from "react-notifications";
import axios from "axios";
import './MaintenanceDetails.css';
import ListContainer from "../Utils/ListContainer/ListContainer";
import ModalDialog from "../Utils/ModalDialog/ModalDialog";
import { Select, Textbox } from "../Layout";
import { getAllBuilders, getAllSites, getAllSiteUnits, getAllOwners, getAllSocieties } from "../../Utils";
import { api } from "../../constants/api";

const MaintenanceDetails = () => {
    const [isNew, setIsNew] = useState(false);
    const [societyList, setSocietyList] = useState([]);
    const [owners, setOwners] = useState([]);
    const [sites, setSites] = useState([]);
    const [siteUnits, setSiteUnits] = useState([]);
    const [builders, setBuilders] = useState([]);
    const [formData, setFormData] = useState({
        name: '',
        registrationNumber: '',
        email: '',
        builder: '',
        site: '',
        siteUnit: '',
        contactNo: '',
        presidentName: '',
        address: '',
        city: '',
        state: '',
        pincode: ''
    });

    useEffect(() => {
        getAllSocieties().then((societyList) => { setSocietyList(societyList); });
    }, []);

    const handleState = (value) => {
        getAllOwners().then((owners) => { setOwners(owners); });
        getAllSites().then((sites) => { setSites(sites); });
        getAllSiteUnits().then((siteUnits) => { setSiteUnits(siteUnits); });
        getAllBuilders().then((builders) => { setBuilders(builders); });
        setIsNew(value);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };


    const addSociety = () => {
        axios
            .post(api.society.CRUD, formData)
            .then((response) => {
                NotificationManager.success(response.data.message);
                setIsNew(false);
                getAllSocieties().then((societyList) => { setSocietyList(societyList); });
            })
            .catch((error) => {
                NotificationManager.error(error.response.data.message);
            });
    };

    const updateSociety = () => {
        axios
            .post(api.society.CRUD, formData)
            .then((response) => {
                console.log("response =======>", response.data);
                NotificationManager.success("Society Added Successfully!");
                setIsNew(false);
                getAllSocieties();
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
                heading={"Society List"}
                dataList={societyList}
                addNew={handleState}
                btnText={"Add New Society"}
                onRowClick={onRowClick}
            />
            <ModalDialog
                show={isNew}
                calltoClose={handleState}
                headerText={"Add New Society"}
                title={"Society Detail"}
                onSaveButtonClick={isNew ? addSociety : updateSociety}
            >
                <div className="row">
                    <Textbox
                        label="Society Name"
                        type="text"
                        className="form-control"
                        placeholder="Enter Society Name"
                        name="name"
                        value={formData.name}
                        onChange={(e) => {
                            handleChange(e);
                        }}
                    />
                </div>
                <div className="row">
                    <div className="col-6">
                        <Textbox
                            label="Registration Number"
                            type="text"
                            className="form-control"
                            placeholder="Enter Registration Number"
                            name="registrationNumber"
                            value={formData.registrationNo}
                            onChange={(e) => {
                                handleChange(e);
                            }}
                        />
                    </div>
                    <div className="col-6">
                        <Textbox
                            label="Society Email"
                            type="email"
                            className="form-control"
                            placeholder="Enter Email"
                            name="email"
                            value={formData.email}
                            onChange={(e) => {
                                handleChange(e);
                            }}
                        />
                    </div>
                </div>
                <div className="row">
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
                </div>
                <div className="row">
                    <div className="col-6">
                        <Select
                            label="Select Owner as President"
                            type="text"
                            placeholder="--Select President--"
                            name="presidentName"
                            data={owners}
                            onChange={(e) => {
                                handleChange(e);
                            }}
                            value={formData.ownerName}
                        />
                    </div>
                    <div className="col-6">
                        <Textbox
                            label="Total Site Unit"
                            type="number"
                            className="form-control"
                            placeholder="Total Site Unit"
                            name="totalSiteUnit"
                            value={formData.totalSiteUnit}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                    </div>
                    <div className="col-6">
                    </div>
                </div >
                <div className="row">
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
                        className="form-control"
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
                    <div className="col-6">
                        <Textbox
                            label="Pin Code"
                            type="number"
                            className="form-control"
                            placeholder="Enter Pin Code"
                            name="pinCode"
                            value={formData.pinCode}
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

export default MaintenanceDetails;
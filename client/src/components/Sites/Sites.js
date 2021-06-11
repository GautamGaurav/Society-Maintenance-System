import react, { useState, useEffect } from 'react';
import { NotificationManager } from 'react-notifications';
import axios from "axios";
import './Sites.css';



function Sites() {
    const [isAddingNewSite, setAddingNewSite] = useState(false);
    const [siteName, setSiteName] = useState("");
    const [societyPresidentName, setSocietyPresidentName] = useState("");
    const [builderName, setBuilderName] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [pincode, setPincode] = useState("");
    const [siteList, setSiteList] = useState([]);

    useEffect(() => {
        GetAllSites();
    }, []);

    const GetAllSites = () => {
        axios.get('http://localhost:3001/api/sites').then((response) => {
            setSiteList(response.data)
        }).catch(error => {
            console.log("error ===> ", error)
            NotificationManager.error(error.response.data.message);
        })
    }
    const AddSite = () => {
        axios.post('http://localhost:3001/api/site',
            {
                siteName: siteName,
                societyPresidentName: societyPresidentName,
                builderName: builderName,
                address: address,
                city: city,
                state: state,
                pincode: pincode
            }
        ).then((response) => {
            console.log("response =======>", response.data);
            NotificationManager.success(response.data.message);

        }).catch(error => {
            console.log("error ===> ", error)
            NotificationManager.error(error.response.data.message);
        })
    }

    const AddNewSite = () => setAddingNewSite(true);
    const Cancel = () => setAddingNewSite(false);

    return (
        <div>
            {!isAddingNewSite ? <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="table-data__tool-right text-right">
                            <button class="au-btn au-btn-icon au-btn--green au-btn--small float-right" onClick={AddNewSite}>
                                <i class="zmdi zmdi-plus"></i>Add New Site</button>

                        </div>
                        <div className="mt-3"></div>
                        <div class="table-responsive table--no-card m-b-30">
                            <table class="table table-borderless table-striped table-earning">
                                <thead>
                                    <tr>
                                        <th class="text-right">Sr. No.</th>
                                        <th class="text-right">Name</th>
                                        <th class="text-right">Society President</th>
                                        <th class="text-right">Builder</th>
                                        <th class="text-right">Address</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {siteList.map((site) => {
                                        return (
                                            <tr>
                                                <td class="text-right">{site.id}</td>
                                                <td class="text-right">{site.name}</td>
                                                <td class="text-right">{site.society_president_name}</td>
                                                <td class="text-right">{site.builder_name}</td>
                                                <td class="text-right">{site.address} {site.city} {site.state}, {site.pincode} </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
                : null}

            {/* ----------Add New Site----------------- */}
            {isAddingNewSite ? <div className="card" >
                <div className="card-header">Add New Site</div>
                <div className="card-body">
                    <div className="card-title">
                        <h3 className="text-center title-2">Site Details</h3>
                    </div>
                    <hr />
                    <div className="form-group">
                        <label className="control-label mb-1">Site Name</label>
                        <div className="input-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter Site Name"
                                onChange={(e) => {
                                    setSiteName(e.target.value)
                                }} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <div className="form-group">
                                <label className="control-label mb-1">Site President</label>
                                <div className="input-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter Site President Name"
                                        onChange={(e) => {
                                            setSocietyPresidentName(e.target.value)
                                        }} />
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="form-group">
                                <label className="control-label mb-1">Builder</label>
                                <div className="input-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter Builder Name"
                                        onChange={(e) => {
                                            setBuilderName(e.target.value)
                                        }} />
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="form-group has-success">
                        <div className="form-group">
                            <label className="control-label mb-1">Address</label>
                            <div className="input-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter Address"
                                    onChange={(e) => {
                                        setAddress(e.target.value)
                                    }} />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <div className="form-group">
                                <label className="control-label mb-1">City</label>
                                <div className="input-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter City"
                                        onChange={(e) => {
                                            setCity(e.target.value)
                                        }} />
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="form-group">
                                <label className="control-label mb-1">State</label>
                                <div className="input-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter State"
                                        onChange={(e) => {
                                            setState(e.target.value)
                                        }} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-6">
                            <div className="form-group">
                                <label className="control-label mb-1">Pin Code</label>
                                <div className="input-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter Pin Code"
                                        onChange={(e) => {
                                            setPincode(e.target.value)
                                        }} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-3"></div>
                    <div>
                        <button
                            type="submit"
                            className="btn btn-md btn-info"
                            onClick={AddSite}
                        >
                            <i className="fa fa-lock fa-lg"></i>&nbsp;
                            <span id="payment-button-amount">Save</span>
                        </button>
                        <button
                            type="submit"
                            onClick={Cancel}
                            className="btn btn-md btn-danger ml-15">
                            <i className="fa fa-lock fa-lg"></i>&nbsp;
                            <span id="payment-button-amount">Cancel</span>
                        </button>
                    </div>
                </div>
            </div>
                : null}
        </div>

    )
}

export default Sites;
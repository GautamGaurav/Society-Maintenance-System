import react, { useState, useEffect } from 'react';
import { Link, browerHistory } from 'react-router-dom';
import axios from "axios";
import { NotificationManager } from 'react-notifications';
import './Builders.css';



function Builders() {
    const [builderList, setBuilderList] = useState([]);
    useEffect(() => {
        GetAllBuilders();
    }, []);

    const GetAllBuilders = () => {
        axios.get('http://localhost:3001/api/builders').then((response) => {
            setBuilderList(response.data)
        }).catch(error => {
            console.log("error ===> ", error)
            NotificationManager.error(error.response.data.message);
        })
    }

    return (
        <div>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="table-data__tool-right text-right">
                            <button class="au-btn au-btn-icon au-btn--green au-btn--small float-right">
                                <i class="zmdi zmdi-plus"></i>Add Builder</button>

                        </div>
                        <div className="mt-3"></div>
                        <div class="table-responsive table--no-card m-b-30">
                            <table class="table table-borderless table-striped table-earning">
                                <thead>
                                    <tr>
                                        <th>Sr. No.</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th class="text-right">Email</th>
                                        <th class="text-right">Contact No</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {builderList.map((builder) => {
                                        return (
                                            <tr>
                                                <td>{builder.id}</td>
                                                <td>{builder.name}</td>
                                                <td>{builder.emailId}</td>
                                                <td class="text-right">{builder.contactNumber}</td>
                                                <td class="text-right">{builder.address} {builder.city} {builder.state}, {builder.pincode} </td>
                                            </tr>
                                        )
                                    })}

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Builders;
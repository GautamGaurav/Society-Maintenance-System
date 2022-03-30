import { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import axios from "axios";
//import { NotificationManager } from 'react-notifications';
import "./Builders.css";
import PageContainer from "../Utils/PageContainer/PageContainer";

const Budget = () => {
    const history = useHistory();
    const location = useLocation();
    const [isNew, setIsNew] = useState(false);
    const [isUpdate, setIsUpdate] = useState(false);
    const [currentYear, setYear] = useState(new Date().getFullYear())


    const getBudget = (year = currentYear) => {
        axios
        .get("http://localhost:3001/api/builders")
        .then((response) => {
          //setBuilderList(response.data);
        })
        .catch((error) => {
          console.log("error ===> ", error);
          //NotificationManager.error(error.response.data.message);
        });
    }

    useEffect(()=> {
        getBudget();
    })
}

export default Budget;
import react, { useState, useEffect } from "react";
import axios from "axios";
import { NotificationManager } from 'react-notifications';
import "./Builders.css";
import PageContainer from "../Utils/PageContainer/PageContainer";

function Builders() {
  const [builderList, setBuilderList] = useState([]);

  useEffect(() => {
    GetAllBuilders();
  }, []);

  const GetAllBuilders = () => {
    axios
      .get("http://localhost:3001/api/builders")
      .then((response) => {
        setBuilderList(response.data);
      })
      .catch((error) => {
        console.log("error ===> ", error);
        NotificationManager.error(error.response.data.message);
      });
  };

  return (
    <div>
      {builderList && builderList.length && builderList.length > 0 ? (
        <PageContainer
          heading={"Society List"}
          dataList={builderList}
          nevigateTo="/builder/new"
          nevigateButtonText="Add New builder"
        ></PageContainer>
      ) : (
        "No Data Found"
      )}
    </div>
  );
}

export default Builders;

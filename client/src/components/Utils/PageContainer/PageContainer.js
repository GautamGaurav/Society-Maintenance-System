import react, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./PageContainer.css";
import ListView from "../ListView/ListView";

function PageContainer({ dataList, heading, nevigateTo, nevigateButtonText }) {
  const history = useHistory();

  const nevigate = (to) => {
    history.push({ pathname: to });
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-12">
          <div className="table-data__tool-right text-right">
            <button
              className="au-btn au-btn-icon au-btn--green au-btn--small float-right"
              onClick={() => nevigate(nevigateTo)}
            >
              <i className="zmdi zmdi-plus"></i>
              {nevigateButtonText}
            </button>
          </div>
          <div className="mt-3"></div>
          {dataList && dataList.length ? (
            <ListView heading={heading} dataList={dataList}></ListView>
          ) : (
            "No Data Found"
          )}
        </div>
      </div>
    </div>
  );
}

export default PageContainer;

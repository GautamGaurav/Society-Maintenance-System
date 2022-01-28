import { AgGridColumn, AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import "./ListView.css";

function ListView({ dataList, heading }) {
  const defaultColDef = {
    resizable: true,
  };

  return (
    <div class="card">
      {/* <div class="card-header">{heading}</div> */}
      <div class="card-body no-padding">
        {/* <div class="card-title">
          <h3 class="text-center title-2">{heading}</h3>
        </div> */}
        <div className="ag-theme-alpine" style={{ height: 500 }}>
          <AgGridReact rowData={dataList} defaultColDef={defaultColDef}>
            {dataList && dataList.length
              ? Object.entries(dataList[0]).map(([key]) => {
                  return (
                    <AgGridColumn
                      field={key}
                      minWidth={key === "id" ? 70 : 300}
                      maxWidth={key === "id" ? 70 : 300}
                    ></AgGridColumn>
                  );
                })
              : ""}
          </AgGridReact>
        </div>
      </div>
    </div>
  );
}

export default ListView;

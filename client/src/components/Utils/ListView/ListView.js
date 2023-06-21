import { AgGridColumn, AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import "./ListView.css";

const ListView = (props) => {
  const defaultColDef = {
    resizable: true,
  };

  const { dataList, heading } = props;

  debugger;

  return (
    <div className="card">
      <div className="card-body no-padding">
        <div className="ag-theme-alpine" style={{ height: 500 }}>
          <AgGridReact rowData={dataList} defaultColDef={defaultColDef}>
            {dataList && dataList.length
              ? Object.entries(dataList[0]).map(([key]) => {
                  return (
                    <AgGridColumn
                      field={key}
                      minWidth={key === "id" ? 70 : 250}
                      maxWidth={key === "id" ? 70 : 250}
                    />
                  );
                })
              : ""}
          </AgGridReact>
        </div>
      </div>
    </div>
  );
};

export default ListView;

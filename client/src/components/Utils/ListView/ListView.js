import { AgGridColumn, AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import "./ListView.css";

const ListView = (props) => {

  const gridOptions = {
    rowData: props?.dataList || [],
    onRowClicked: event => props?.onRowClick(event)
  }

  const defaultColDef = {
    resizable: true,
  };


  const rederColumn = () => {
    return (
      props?.dataList && props?.dataList?.length > 0
        ? Object.entries(props?.dataList?.[0]).map(([key]) => {
          return (
            <AgGridColumn
              key={key}      // Always add a unique key when rendering lists in React
              field={key}
            />
          );
        })
        : null
    );
  };

  return (
    <div className="card">
      <div className="card-body no-padding">
        <div className="ag-theme-alpine" style={{ height: 500 }}>
          <AgGridReact
            gridOptions={gridOptions}
            defaultColDef={defaultColDef}
          >
            {rederColumn()}
          </AgGridReact>
        </div>
      </div>
    </div>
  );
};

export default ListView;

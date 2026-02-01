import { AgGridColumn, AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import "./ListView.css";

const ListView = (props) => {
  const { dataList = [], hideColumn = [], onRowClick } = props;

  const gridOptions = {
    rowData: dataList,
    onRowClicked: event => onRowClick?.(event),
    pagination: true, // Enable pagination
    paginationPageSize: 10, // Optional: set rows per page
  };

  const defaultColDef = {
    resizable: true,
    filter: true,
    sortable: true
  };

  const toDisplayName = (camelCase) => {
    return camelCase.replace(/([A-Z])/g, " $1").replace(/^./, str => str.toUpperCase());
  }

  const renderColumn = () => {
    if (!dataList.length) return null;

    const hideSet = new Set(hideColumn.map(c => c.toLowerCase()));

    // Collect all keys across rows to build a stable set of columns
    const allKeys = Array.from(new Set(dataList.flatMap(Object.keys)));

    // Preferred ordering for common fields
    const preferredOrder = ['name', 'builder', 'address', 'city', 'state', 'pincode', 'registrationNumber', 'email', 'contactNo'];

    // Sort keys: preferred keys first (in that order), then the rest alphabetically
    const orderedKeys = [
      ...preferredOrder.filter(k => allKeys.includes(k)),
      ...allKeys.filter(k => !preferredOrder.includes(k)).sort()
    ];

    return [
      <AgGridColumn
        key="srNo"
        headerName="Sr. No."
        valueGetter={(params) => (params && params.node ? params.node.rowIndex + 1 : '')}
        pinned="left"
        width={80}
      />,
      ...orderedKeys.map((key) => {
        const displayName = toDisplayName(key);
        const shouldHide = hideSet.has(displayName.toLowerCase());

        // Value getter to handle object values gracefully
        const valueGetter = (params) => {
          const v = params?.data?.[key];
          if (v === null || v === undefined) return '';
          if (typeof v === 'object') return v.name ?? v.text ?? v.value ?? v.id ?? '';
          return v;
        };

        return (
          <AgGridColumn
            key={key}
            field={key}
            headerName={displayName}
            hide={shouldHide}
            style={{ width: '100%', height: '100%' }}
            domLayout="normal"
            valueGetter={valueGetter}
          />
        );
      })
    ];
  };

  const onGridReady = (params) => {
    params.columnApi.autoSizeAllColumns();
  };

  return (
    <div className="card">
      <div className="card-body no-padding">
        <div className="ag-theme-alpine">
          <AgGridReact
            style={{ width: '100%', maxWidth: '800px' }}
            gridOptions={gridOptions}
            defaultColDef={defaultColDef}
            domLayout="autoHeight"
            onGridReady={onGridReady}
          >
            {renderColumn()}
          </AgGridReact>
        </div>
      </div>
    </div>
  );
};

export default ListView;

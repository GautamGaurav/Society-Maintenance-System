import "./ListContainer.css";
import ListView from "../ListView/ListView";
import { Button } from "../../Layout";

const ListContainer = (props) => {
  const { addNew, heading, dataList, onRowClick, showButton = true, hideColumn = [] } = props;

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-12">
          {showButton && <Button
            variant="success"
            onClick={() => addNew(true)}
            icon={<i class="fa fa-plus-circle" aria-hidden="true" />}
            text={props.btnText}
          />}
          <div className="mt-3"></div>
          {dataList && dataList.length ? (
            <ListView
              heading={heading}
              dataList={dataList}
              onRowClick={onRowClick}
              hideColumn={hideColumn}
            />
          ) : (
            <div className="row">
              <div className="border border-light"
                style={{
                  backgroundColor: '#fff2cc',
                  padding: '10px',
                  borderRadius: '5px',
                  marginLeft: '10px',
                  textAlign: "center"
                }}>No Data Found</div>
            </div>
          )}
        </div>
      </div>
    </div >
  );
};

export default ListContainer;

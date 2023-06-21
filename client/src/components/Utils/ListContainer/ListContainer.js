import "./ListContainer.css";
import ListView from "../ListView/ListView";

const ListContainer = (props) => {
  const { addNew, heading, dataList } = props;

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-12">
          <button
            className="au-btn au-btn-icon au-btn--green au-btn--small mb-3"
            onClick={() => addNew(true)}
          >
            <i className="zmdi zmdi-plus"></i>
            {props.btnText}
          </button>
          {dataList && dataList.length ? (
            <ListView heading={heading} dataList={dataList}></ListView>
          ) : (
            "No Data Found"
          )}
        </div>
      </div>
    </div>
  );
};

export default ListContainer;

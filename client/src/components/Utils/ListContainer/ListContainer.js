import "./ListContainer.css";
import ListView from "../ListView/ListView";

const ListContainer = (props) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-12">
        <button
        className="au-btn au-btn-icon au-btn--green au-btn--small mb-3"
        onClick={() => props.addNew(true)}
      >
        <i className="zmdi zmdi-plus"></i>
        {props.btnText}
      </button>
          {props.dataList && props.dataList.length ? (
            <ListView heading={props.heading} dataList={props.dataList}></ListView>
          ) : (
            "No Data Found"
          )}
        </div>
      </div>
    </div>
  );
}

export default ListContainer;

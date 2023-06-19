import "./ListContainer.css";
import ListView from "../ListView/ListView";

const ListContainer = ({ dataList, heading }) => {

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-12">
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

export default ListContainer;

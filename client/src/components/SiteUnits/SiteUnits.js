import { useState, useEffect } from "react";
import axios from "axios";
import { NotificationManager } from "react-notifications";
import "./SiteUnits.css";
import ListContainer from "../Utils/ListContainer";
import ModalDialog from "../Utils/ModalDialog";
import { Select, Textbox, Button } from "../Layout";
import { SiteOptions, FloorOptions, RoomLayout } from "../../constants/data";
import { getAllSites, getSitesByBuilderId, getAllBuilders, getSiteUnitsBySiteId, getAllSiteUnits } from "../../Utils";
import { api } from "../../constants/api";


function SiteUnits() {
  const [modal, setModal] = useState({ open: false, mode: 'add', item: null });
  const [siteUnitsList, setSiteUnitsList] = useState([]);
  const [siteList, setSiteList] = useState([]);
  const [builderList, setBuilderList] = useState([]);
  const [filterBuilder, setFilterBuilder] = useState('0');
  const [filterSite, setFilterSite] = useState('0');

  const [formData, setFormData] = useState({
    site: '',
    name: '',
    type: '',
    floor: '',
    roomLayout: '',
    areaSize: ''
  });

  useEffect(() => {
    // load builders only; wait for user to select builder + site to fetch units
    getAllBuilders().then((builders) => { setBuilderList(builders); });
  }, []);

  useEffect(() => {
    // when filterBuilder changes, fetch sites for that builder and show all units across those sites
    if (filterBuilder && filterBuilder !== '0') {
      getSitesByBuilderId(filterBuilder).then((sites) => {
        setSiteList(sites);

        // Load all site units and filter those that belong to the fetched sites
        const siteIds = sites.map(s => s.site);

        getAllSiteUnits().then((allUnits) => {
          const filteredUnits = allUnits.filter(unit => {
            const unitSite = unit.site;
            return siteIds.includes(unitSite);
          });
          setSiteUnitsList(filteredUnits);
        }).catch((err) => {
          console.log('error fetching all site units', err);
          setSiteUnitsList([]);
        });

      });
    } else {
      // no builder selected, clear sites and units
      setSiteList([]);
      setSiteUnitsList([]);
    }

    // reset site filter when builder changes
    setFilterSite('0');
  }, [filterBuilder]);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const addSiteUnit = () => {
    axios
      .post(api.siteUnit.CRUD, formData)
      .then((response) => {
        // refresh site list (in case a new site was added elsewhere)
        getAllSites().then((sites) => { setSiteList(sites); });
        // if a site is currently selected, refresh units for that site
        if (filterSite && filterSite !== '0') {
          getSiteUnitsBySiteId(filterSite).then((units) => { setSiteUnitsList(units); });
        }
        closeModal();
        console.log("response =======>", response.data);
        NotificationManager.success("Site Added Successfully");
      })
      .catch((error) => {
        console.log("error ===> ", error);
        //NotificationManager.error(error.response.data.message);
      });
  };

  const updateSiteUnit = () => {
    axios
      .post(api.siteUnit.CRUD, formData)
      .then((response) => {
        console.log("response =======>", response.data);
        // NotificationManager.success(response.data.message);
      })
      .catch((error) => {
        console.log("error ===> ", error);
        //NotificationManager.error(error.response.data.message);
      });
  };

  const openAdd = () => {
    setFormData({
      site: '',
      name: '',
      type: '',
      floor: '',
      roomLayout: '',
      areaSize: ''
    });
    setModal({ open: true, mode: 'add', item: null });
  };

  const openEdit = (item) => {
    setFormData(item);
    setModal({ open: true, mode: 'edit', item });
  };

  const closeModal = () => {
    setModal({ open: false, mode: 'add', item: null });
  };

  const onRowClick = (e) => {
    openEdit(e.data);
  }

  const handleBuilderFilter = (e) => {
    const value = e.target.value;
    setFilterBuilder(value);
  }

  const handleSiteFilter = (e) => {
    const value = e.target.value;
    setFilterSite(value);
    if (value && value !== '0') {
      // fetch site units for the selected site
      getSiteUnitsBySiteId(value).then((units) => {
        setSiteUnitsList(units);
      });
    } else {
      // no site selected, clear units until a site is chosen
      setSiteUnitsList([]);
    }
  }

  const clearBuilderFilter = () => {
    setFilterBuilder('0');
    setFilterSite('0');
    setSiteList([]);
    setSiteUnitsList([]);
  }

  return (
    <div>
      <div className="row mb-2">
        <div className="col-4 d-flex align-items-end">
          <div className="flex-grow-1">
            <Select
              placeholder="--Filter by Builder--"
              label={<h5>Filter Builder</h5>}
              name="filterBuilder"
              value={filterBuilder}
              data={builderList}
              onChange={handleBuilderFilter}
            />
          </div>
        </div>
        <div className="col-4 d-flex align-items-end">
          <div className="flex-grow-1">
            <Select
              placeholder="--Select Site--"
              label={<h5>Filter Site</h5>}
              name="filterSite"
              value={filterSite}
              data={siteList}
              onChange={handleSiteFilter}
            />
          </div>
          <div className="ms-2">
            <Button
              variant="secondary"
              text="Clear"
              onClick={clearBuilderFilter}
            />
          </div>
        </div>
        <div className="col-4 d-flex justify-content-end align-items-end">
          <Button
            variant="success"
            text="Add New Site Unit"
            onClick={openAdd}
          />
        </div>
      </div>

      {(!siteUnitsList.length && (filterBuilder === '0' || filterSite === '0')) ? (
        <div className="row">
          <div className="border border-light"
            style={{
              backgroundColor: '#fff2cc',
              padding: '10px',
              borderRadius: '5px',
              marginLeft: '10px',
              textAlign: "center"
            }}>Please select a Builder and Site to view Site Units</div>
        </div>
      ) : (
        <ListContainer
          onRowClick={onRowClick}
          heading={"Site Unit List"}
          dataList={siteUnitsList}
          hideColumn={['id']}
          addNew={openAdd}
          showButton={false}
        />
      )}

      <ModalDialog
        show={modal.open}
        calltoClose={closeModal}
        headerText={modal.mode === 'edit' ? "Edit Site Unit" : "Add New Site Unit"}
        title={"Site Details"}
        onSaveButtonClick={modal.mode === 'edit' ? updateSiteUnit : addSiteUnit}
      >
        <div className="row">
          <div className="col-6">
            <Select
              label="Select Site"
              name="site"
              placeholder={"--Select Site--"}
              onChange={(e) => {
                handleChange(e);
              }}
              data={siteList}
            />
          </div>
          <div className="col-6">
            <Textbox
              label="Site Units Name/No"
              type="text"
              className="form-control"
              placeholder="Enter Site Unit Name/No"
              name="name"
              value={formData.name}
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <Select
              label="Select Site Unit Type"
              name="type"
              className="form-control"
              onChange={(e) => {
                handleChange(e);
              }}
              placeholder={"--Select Site Unit Type--"}
              data={SiteOptions}
            />
          </div>
          <div className="col-6">
            <Select
              label="Select Floor"
              name="floor"
              className="form-control"
              onChange={(e) => {
                handleChange(e);
              }}
              placeholder={"--Select Floor--"}
              data={FloorOptions}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <Select
              label="Select Rooms Layout"
              name="roomLayout"
              className="form-control"
              onChange={(e) => {
                handleChange(e);
              }}
              placeholder={"--Select Room Layout Type--"}
              data={RoomLayout}
            />
          </div>
          <div className="col-6">
            <Textbox
              label="Area Size"
              type="text"
              className="form-control"
              placeholder="Enter Area Size in Sq Ft"
              name="areaSize"
              value={formData.areaSize}
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>
        </div>
      </ModalDialog >
    </div >
  );
}

export default SiteUnits;

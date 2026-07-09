import { useState, useEffect } from "react";
import { NotificationManager } from "react-notifications";
import axios from "axios";
import "./Sites.css";
import ListContainer from "../Utils/ListContainer";
import ModalDialog from "../Utils/ModalDialog";
import { Textbox, Select, Button } from "../Layout";
import { getAllBuilders, getAllSites, getSitesByBuilderId } from "../../Utils";
import { api } from "../../constants/api";

function Sites() {
  const [isNew, setIsNew] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [siteList, setSiteList] = useState([]);
  const [allSites, setAllSites] = useState([]);
  const [builderList, setBuilderList] = useState([]);
  const [filterBuilder, setFilterBuilder] = useState('0');
  const [formData, setFormData] = useState({
    id: null,
    name: '',
    builder: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
  });

  // Normalize site rows to a consistent shape for UI
  const normalizeSites = (sites = []) => {
    return (sites || []).map((row) => {
      const id = row.id ?? row.siteId ?? row['site id'] ?? row.site_id ?? null;
      const name = row.name ?? row.siteName ?? row.site_name ?? '';

      // builder may come in various shapes: object, id, or name
      let builderRaw = row.builder ?? row['builder id'] ?? row.builderId ?? row.builder_id ?? row.builderName ?? row.builder_name ?? '';

      let builderId = null; // Store as number or null
      let builderName = '';

      if (builderRaw && typeof builderRaw === 'object') {
        const idVal = builderRaw.id ?? builderRaw.value;
        builderId = idVal ? Number(idVal) : null;
        builderName = builderRaw.name ?? builderRaw.text ?? builderRaw.value ?? '';
      } else if (builderRaw !== null && builderRaw !== undefined && String(builderRaw).trim() !== '') {
        const rawStr = String(builderRaw).trim();
        if (/^\d+$/.test(rawStr)) {
          // numeric -> treat as id
          builderId = Number(rawStr);
          const b = builderList.find(bi => {
            const biId = bi.id ?? bi.value;
            return Number(biId) === builderId;
          });
          if (b) builderName = b.name ?? b.text ?? b.value ?? '';
        } else {
          // non-numeric -> treat as name
          builderName = rawStr;
          const b = builderList.find(bi => {
            const biName = String(bi.name ?? bi.text ?? bi.value ?? '');
            return biName.toLowerCase() === builderName.toLowerCase();
          });
          if (b) {
            const biId = b.id ?? b.value;
            builderId = Number(biId);
          }
        }
      }

      // if we have id but not name, resolve name from builderList
      if (!builderName && builderId) {
        const b = builderList.find(bi => {
          const biId = bi.id ?? bi.value;
          return Number(biId) === builderId;
        });
        if (b) builderName = b.name ?? b.text ?? b.value ?? '';
      }

      const address = row.address ?? '';
      const city = row.city ?? '';
      const state = row.state ?? '';
      const pincode = row.pincode ?? row.pinCode ?? row.postal ?? '';

      // Build a clean result object and remove redundant builder fields to avoid duplicate columns
      const result = { ...row };
      delete result.builderName;
      delete result.builder_name;
      delete result['builder id'];
      delete result.builder_id;

      result.id = id;
      result.name = name;
      result.builder = builderName || (builderId ? String(builderId) : ''); // builder shows name if available
      result.builderId = builderId; // Store as number for consistent filtering
      result.address = address;
      result.city = city;
      result.state = state;
      result.pincode = pincode;

      return result;
    });
  };

  useEffect(() => {
    getAllSites().then((sites) => { const normalized = normalizeSites(sites); setAllSites(normalized); setSiteList(normalized); });
    getAllBuilders().then((builders) => { setBuilderList(builders); });
  }, []);

  // Re-run normalization when builderList becomes available so builder names are resolved
  useEffect(() => {
    if (builderList && builderList.length) {
      setAllSites(prev => normalizeSites(prev));
      setSiteList(prev => normalizeSites(prev));
    }
  }, [builderList]);

  const handleState = (value) => {
    setIsNew(value);
  };

  const openAddModal = () => {
    setFormData({ id: null, name: '', builder: '', address: '', city: '', state: '', pincode: '' });
    setIsUpdate(false);
    setIsNew(true);
  };

  const openEditModal = (row) => {
    // Normalize row to expected formData shape so selects receive correct values
    const idVal = row.id ?? row.siteId ?? row['site id'] ?? null;
    const rawBuilder = row.builder ?? row['builder id'] ?? row.builder_id ?? row.builderId ?? (row.builder && (row.builder.id ?? row.builder.value)) ?? '';
    const builderVal = rawBuilder !== null && rawBuilder !== undefined ? String(rawBuilder) : '';

    const normalized = {
      id: idVal,
      name: row.name ?? row.siteName ?? '',
      builder: builderVal,
      address: row.address ?? '',
      city: row.city ?? '',
      state: row.state ?? '',
      pincode: row.pincode ?? row.pinCode ?? row.postal ?? ''
    };

    setFormData(normalized);
    setIsUpdate(true);
    setIsNew(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleBuilderFilter = (e) => {
    const value = e.target.value;
    setFilterBuilder(value);

    if (value && value !== '0') {
      const builderId = String(value);
      console.debug('Filtering by builder ID:', builderId);

      // Use server API for filtering to ensure accurate results
      getSitesByBuilderId(builderId).then((sites) => {
        const normalized = normalizeSites(sites || []);
        console.debug('Filtered sites count:', normalized.length);
        setSiteList(normalized);
      }).catch((err) => {
        console.error('Error fetching sites by builder', err);
        // Fallback to local filtering if API fails
        const normalizedAll = normalizeSites(allSites);
        const localFiltered = normalizedAll.filter(s => {
          // Compare by numeric builderId to avoid type mismatches
          const sBuilderId = s.builderId ? Number(s.builderId) : null;
          const selectedId = Number(builderId);
          return sBuilderId === selectedId;
        });
        setSiteList(localFiltered.length ? localFiltered : []);
      });
    } else {
      // Show all sites
      setSiteList(allSites);
    }
  };

  const saveSite = () => {
    // simple validation
    if (!formData.name || !formData.name.trim()) {
      NotificationManager.error('Site name is required');
      return;
    }
    if (!formData.builder || formData.builder === '0') {
      NotificationManager.error('Please select a builder');
      return;
    }

    const payload = { ...formData };
    axios
      .post(api.site.CRUD, payload)
      .then((response) => {
        const msg = response?.data?.message || (formData.id ? 'Site updated successfully' : 'New Site Added Successfully!');
        NotificationManager.success(msg);
        setIsNew(false);
        setIsUpdate(false);
        setFormData({ id: null, name: '', builder: '', address: '', city: '', state: '', pincode: '' });
        // refresh site lists
        if (filterBuilder && filterBuilder !== '0') {
          getSitesByBuilderId(filterBuilder).then((sites) => { setSiteList(normalizeSites(sites)); });
        } else {
          getAllSites().then((sites) => { const normalized = normalizeSites(sites); setAllSites(normalized); setSiteList(normalized); });
        }
      })
      .catch((error) => {
        console.log("error ===> ", error);
        NotificationManager.error(
          error?.response?.data?.message || "Some error occurred, please check console log"
        );
      });
  };

  const clearBuilderFilter = () => {
    setFilterBuilder('0');
    // Re-normalize allSites to ensure builder names are resolved
    const normalizedAll = normalizeSites(allSites);
    setSiteList(normalizedAll);
  };



  const onRowClick = (e) => {
    console.log("Event ==============> ", e.data)
    openEditModal(e.data);
  }

  return (
    <div>
      <div className="row mb-2">
        <div className="col-6 d-flex align-items-end">
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
          <div className="ms-2">
            <Button
              variant="secondary"
              text="Clear"
              onClick={clearBuilderFilter}
            />
          </div>
        </div>
        <div className="col-6 d-flex justify-content-end align-items-end">
          <div>
            <Button
              variant="success"
              text="Add New Site"
              onClick={openAddModal}
            />
          </div>
        </div>
      </div>

      <ListContainer
        onRowClick={onRowClick}
        heading={"Site List"}
        dataList={siteList}
        addNew={handleState}
        showButton={false}
        hideColumn={['id', 'builder id']}
      />
      <ModalDialog
        show={isNew}
        calltoClose={() => { setIsNew(false); setIsUpdate(false); }}
        headerText={isUpdate ? "Update Site" : "Add New Site"}
        title={isUpdate ? "Update Site Details" : "Add New Site"}
        onSaveButtonClick={saveSite}
      >
        <div className="row">
          <Textbox
            type="text"
            placeholder="Enter Site Name"
            name="name"
            value={formData.name}
            label={"Site Name"}
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
        <div className="row">
          <Select
            name="builder"
            id="builder"
            value={formData.builder}
            onChange={(e) => {
              handleChange(e);
            }}
            data={builderList}
            placeholder={"--Select Builder--"}
          />
        </div>
        <div className="row">
          <Textbox
            label="Address"
            type="text"
            placeholder="Enter Address"
            name="address"
            value={formData.address}
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
        <div className="row">
          <div className="col-6">
            <Textbox
              label="City"
              type="text"
              className="form-control"
              placeholder="Enter City"
              name="city"
              value={formData.city}
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>
          <div className="col-6">
            <Textbox
              label="State"
              type="text"
              className="form-control"
              placeholder="Enter State"
              name="state"
              value={formData.state}
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <Textbox
              label="Pin Code"
              type="text"
              className="form-control"
              placeholder="Enter Pin Code"
              name="pincode"
              value={formData.pincode}
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>
        </div>
      </ModalDialog>
    </div >
  );
}

export default Sites;

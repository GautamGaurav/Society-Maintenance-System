import axios from "axios";
import { api } from "../constants/api"

const getAllBuilders = async () => {
    try {
        const response = await axios.get(api.builder.GET);
        return response.data;
    } catch (error) {
        console.log("error ===> ", error);
        return [];
    }
};

const getAllSites = async () => {
    try {
        const response = await axios.get(api.site.GET);
        return response.data;
    } catch (error) {
        console.log("error ===> ", error);
        return [];
    }
};

const getAllSiteUnits = async () => {
    try {
        const response = await axios.get(api.siteUnit.GET);
        return response.data;
    } catch (error) {
        console.log("error ===> ", error);
        return [];
    }
};

const getAllOwners = async () => {
    try {
        const response = await axios.get(api.owner.GET);
        debugger
        return response?.data?.[0] || [];
    } catch (error) {
        console.log("error ===> ", error);
        return [];
    }
};

export { getAllOwners, getAllSites, getAllBuilders, getAllSiteUnits }
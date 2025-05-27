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
        return response?.data?.[0] || [];
    } catch (error) {
        console.log("error ===> ", error);
        return [];
    }
};

const getAllSocieties = async () => {
    try {
        const response = await axios.get(api.society.GET);
        return response?.data || [];
    } catch (error) {
        console.log("error ===> ", error);
        return [];
    }
};

const getAllSocietyById = async (id) => {
    try {
        const response = await axios.get(api.society.GET_BY_ID + id);
        return response?.data || [];
    } catch (error) {
        console.log("error ===> ", error);
        return [];
    }
};

const getSocietyDetailsById = async (societyId) => {
    try {
        const url = api.society.GET_ALL_DETAILS_BY_ID + `${societyId}`;
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.log("error ===> ", error);
        return [];
    }

};

const getAllBudget = async () => {
    try {
        const response = await axios.get(api.budget.GET);
        return response?.data || [];
    } catch (error) {
        console.log("error ===> ", error);
        return [];
    }
};

export {
    getAllOwners,
    getAllSites,
    getAllBuilders,
    getAllSiteUnits,
    getAllSocieties,
    getAllSocietyById,
    getAllBudget,
    getSocietyDetailsById
}
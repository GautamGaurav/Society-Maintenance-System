import axios from "axios";
import { api } from "../constants/api";
import { Builder, Site, SiteUnit, Owner, Society, User } from "../types/models";
import { mapBuilder, mapSite, mapSiteUnit, mapOwner, mapSociety, mapUser } from "./mapper";

const getAllBuilders = async (): Promise<Builder[]> => {
  try {
    const response = await axios.get(api.builder.GET);
    const rows = response?.data || [];
    return (rows as any).map((r: any) => mapBuilder(r));
  } catch (error) {
    console.log("error ===> ", error);
    return [];
  }
};

const getAllSites = async (): Promise<Site[]> => {
  try {
    const response = await axios.get(api.site.GET);
    const rows = response?.data || [];
    return (rows as any).map((r: any) => mapSite(r));
  } catch (error) {
    console.log("error ===> ", error);
    return [];
  }
};

const getSitesByBuilderId = async (builderId: number): Promise<Site[]> => {
  try {
    const response = await axios.get(api.site.GET, { params: { builderId } });
    const rows = response?.data || [];
    return (rows as any).map((r: any) => mapSite(r));
  } catch (error) {
    console.log("error ===> ", error);
    return [];
  }
};

const getSiteUnitsBySiteId = async (siteId: number): Promise<SiteUnit[]> => {
  try {
    const response = await axios.get(api.siteUnit.GET_ALL_BY_SITE_ID + `${siteId}`);
    const rows = response?.data || [];
    return (rows as any).map((r: any) => mapSiteUnit(r));
  } catch (error) {
    console.log("error ===> ", error);
    return [];
  }
};

const getAllSiteUnits = async (): Promise<SiteUnit[]> => {
  try {
    const response = await axios.get(api.siteUnit.GET);
    const rows = response?.data || [];
    return (rows as any).map((r: any) => mapSiteUnit(r));
  } catch (error) {
    console.log("error ===> ", error);
    return [];
  }
};

const getAllOwners = async (): Promise<Owner[]> => {
  try {
    const response = await axios.get(api.owner.GET);
    const rows = response?.data || [];
    return (rows as any).map((r: any) => mapOwner(r));
  } catch (error) {
    console.log("error ===> ", error);
    return [];
  }
};

const getAllSocieties = async (): Promise<Society[]> => {
  try {
    const response = await axios.get(api.society.GET);
    const rows = response?.data || [];
    return (rows as any).map((r: any) => mapSociety(r));
  } catch (error) {
    console.log("error ===> ", error);
    return [];
  }
};

const getAllSocietyById = async (id: number): Promise<Society | null> => {
  try {
    const response = await axios.get(api.society.GET_BY_ID + id);
    const item = response?.data || null;
    return item ? mapSociety(item) : null;
  } catch (error) {
    console.log("error ===> ", error);
    return null;
  }
};

const getSocietyDetailsById = async (societyId: number): Promise<any> => {
  try {
    const url = api.society.GET_ALL_DETAILS_BY_ID + `${societyId}`;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log("error ===> ", error);
    return null;
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

const getBudgetBySocietyId = async (societyId: number) => {
  try {
    const response = await axios.get(api.budget.GET_BY_ID + `${societyId}`);
    return response?.data || [];
  } catch (error) {
    console.log("error ===> ", error);
    return [];
  }
};

export {
  getAllOwners,
  getAllSites,
  getSitesByBuilderId,
  getAllBuilders,
  getAllSiteUnits,
  getSiteUnitsBySiteId,
  getAllSocieties,
  getAllSocietyById,
  getAllBudget,
  getBudgetBySocietyId,
  getSocietyDetailsById
};

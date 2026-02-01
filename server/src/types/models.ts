export type Nullable<T> = T | null | undefined;

// Builder
export interface BuilderDB {
  id: number;
  name: string;
  email: string;
  gstn?: string | null;
  rera_registration_number?: string | null;
  contact_no?: string | null;
  address?: string | null;
  state?: string | null;
  city?: string | null;
  pincode?: string | null;
}

export interface Builder {
  id: number;
  name: string;
  email: string;
  gstn?: string | null;
  reraRegistrationNumber?: string | null;
  contactNo?: string | null;
  address?: string | null;
  state?: string | null;
  city?: string | null;
  pincode?: string | null;
}

// Owner
export interface OwnerDB {
  id: number;
  name: string;
  builder: string;
  site: string;
  site_unit: string;
  email?: string | null;
  contact_no?: string | null;
  address?: string | null;
  city?: string | null;
  state?: string | null;
  pincode?: string | null;
}

export interface Owner {
  id: number;
  name: string;
  builder: string;
  site: string;
  siteUnit: string;
  email?: string | null;
  contactNo?: string | null;
  address?: string | null;
  city?: string | null;
  state?: string | null;
  pincode?: string | null;
}

// Site
export interface SiteDB {
  id: number;
  name: string;
  builder: number;
  address?: string | null;
  state?: string | null;
  pincode?: string | null;
  city?: string | null;
}

export interface Site {
  id: number;
  name: string;
  builderId: number;
  address?: string | null;
  state?: string | null;
  pincode?: string | null;
  city?: string | null;
}

// SiteUnit
export interface SiteUnitDB {
  id: number;
  site?: number | null;
  name?: string | null;
  type?: string | null;
  floor?: string | null;
  room_layout?: string | null;
  area_size?: string | null;
  ews?: number | null;
}

export interface SiteUnit {
  id: number;
  site?: number | null;
  name?: string | null;
  type?: string | null;
  floor?: string | null;
  roomLayout?: string | null;
  areaSize?: string | null;
  isEws?: boolean | null;
}

// Society
export interface SocietyDB {
  id: number;
  name: string;
  registration_no: string;
  email: string;
  builder: string;
  site: string;
  site_unit: string;
  contact_no: string;
  president_name?: string | null;
  address: string;
  city: string;
  state: string;
  pincode: string;
}

export interface Society {
  id: number;
  name: string;
  registrationNo: string;
  email: string;
  builder: string;
  site: string;
  siteUnit: string;
  contactNo: string;
  presidentName?: string | null;
  address: string;
  city: string;
  state: string;
  pincode: string;
}

// Users
export interface UserDB {
  id: number;
  email?: string | null;
  password?: string | null;
}

export interface User {
  id: number;
  email?: string | null;
}

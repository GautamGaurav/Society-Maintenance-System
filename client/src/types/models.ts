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

export interface Site {
  id: number;
  name: string;
  builderId?: number | null;
  builderName?: string | null;
  address?: string | null;
  state?: string | null;
  pincode?: string | null;
  city?: string | null;
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

export interface User {
  id: number;
  email?: string | null;
}

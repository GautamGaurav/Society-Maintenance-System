import { Builder, Site, SiteUnit, Owner, Society, User } from "../types/models";

export const snakeToCamel = (s: string) => s.replace(/_([a-z])/g, (_, ch) => ch.toUpperCase());

export function mapObjectKeysToCamel<T = any>(row: any): T {
  if (!row || typeof row !== "object") return row;
  const out: any = {};
  Object.keys(row).forEach((k) => {
    out[snakeToCamel(k)] = row[k];
  });
  return out as T;
}

export function mapBuilder(row: any): Builder { return mapObjectKeysToCamel<Builder>(row); }
export function mapSite(row: any): Site { return mapObjectKeysToCamel<Site>(row); }
export function mapSiteUnit(row: any): SiteUnit { return mapObjectKeysToCamel<SiteUnit>(row); }
export function mapOwner(row: any): Owner { return mapObjectKeysToCamel<Owner>(row); }
export function mapSociety(row: any): Society { return mapObjectKeysToCamel<Society>(row); }
export function mapUser(row: any): User { const u = mapObjectKeysToCamel<User>(row); delete (u as any).password; return u; }

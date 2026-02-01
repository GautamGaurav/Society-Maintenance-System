import { Site, SiteDB, Builder, BuilderDB, SiteUnit, SiteUnitDB, OwnerDB, Owner, SocietyDB, Society, UserDB, User } from "../types/models";

export function snakeToCamel(s: string): string {
  return s.replace(/_([a-z])/g, (_, ch) => ch.toUpperCase());
}

export function mapObjectKeysToCamel<T = any>(row: any): T {
  if (!row || typeof row !== "object") return row;
  const out: any = {};
  Object.keys(row).forEach((k) => {
    out[snakeToCamel(k)] = row[k];
  });
  return out as T;
}

export function mapBuilder(row: BuilderDB): Builder {
  return mapObjectKeysToCamel<Builder>(row);
}

export function mapSite(row: any): Site {
  const mapped = mapObjectKeysToCamel<Site & Partial<SiteDB>>(row);
  // Normalize builderId name from builder or builderId
  if ((mapped as any).builder !== undefined && (mapped as any).builder !== null) {
    // if builder is numeric string, coerce
    const val = (mapped as any).builder;
    const asNum = Number(val);
    if (!Number.isNaN(asNum)) {
      (mapped as any).builderId = asNum;
      delete (mapped as any).builder;
    } else if ((mapped as any).builderId === undefined && typeof val === "string") {
      // keep as string if it was builderName
      (mapped as any).builder = val;
    }
  }
  if ((mapped as any).builderId === undefined && (mapped as any).builderId === null) {
    // nothing
  }
  return mapped as Site;
}

export function mapSiteUnit(row: SiteUnitDB): SiteUnit {
  const mapped = mapObjectKeysToCamel<SiteUnit>(row) as any;
  if (mapped.ews !== undefined) {
    mapped.isEws = mapped.ews === 1 || mapped.ews === true;
    delete mapped.ews;
  }
  if (mapped.room_layout !== undefined) {
    mapped.roomLayout = mapped.room_layout;
    delete mapped.room_layout;
  }
  if (mapped.area_size !== undefined) {
    mapped.areaSize = mapped.area_size;
    delete mapped.area_size;
  }
  return mapped as SiteUnit;
}

export function mapOwner(row: OwnerDB): Owner {
  const mapped = mapObjectKeysToCamel<Owner>(row) as any;
  if (mapped.site_unit !== undefined) {
    mapped.siteUnit = mapped.site_unit;
    delete mapped.site_unit;
  }
  if (mapped.contact_no !== undefined) {
    mapped.contactNo = mapped.contact_no;
    delete mapped.contact_no;
  }
  return mapped as Owner;
}

export function mapSociety(row: SocietyDB): Society {
  const mapped = mapObjectKeysToCamel<Society>(row) as any;
  if (mapped.registration_no !== undefined) {
    mapped.registrationNo = mapped.registration_no;
    delete mapped.registration_no;
  }
  if (mapped.site_unit !== undefined) {
    mapped.siteUnit = mapped.site_unit;
    delete mapped.site_unit;
  }
  if (mapped.contact_no !== undefined) {
    mapped.contactNo = mapped.contact_no;
    delete mapped.contact_no;
  }
  if (mapped.president_name !== undefined) {
    mapped.presidentName = mapped.president_name;
    delete mapped.president_name;
  }
  return mapped as Society;
}

export function mapUser(row: UserDB): User {
  const mapped = mapObjectKeysToCamel<User>(row) as any;
  delete mapped.password;
  return mapped as User;
}

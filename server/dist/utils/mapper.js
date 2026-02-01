// JS shim (ESM) so existing controllers can use the mapper immediately.
export const snakeToCamel = (s) => s.replace(/_([a-z])/g, (_, ch) => ch.toUpperCase());
export function mapObjectKeysToCamel(row) {
    if (!row || typeof row !== 'object')
        return row;
    const out = {};
    Object.keys(row).forEach((k) => { out[snakeToCamel(k)] = row[k]; });
    return out;
}
export function mapBuilder(row) { return mapObjectKeysToCamel(row); }
export function mapSite(row) {
    const mapped = mapObjectKeysToCamel(row);
    if (mapped.builder !== undefined && mapped.builder !== null) {
        const asNum = Number(mapped.builder);
        if (!Number.isNaN(asNum)) {
            mapped.builderId = asNum;
            delete mapped.builder;
        }
    }
    return mapped;
}
export function mapSiteUnit(row) {
    const mapped = mapObjectKeysToCamel(row);
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
    return mapped;
}
export function mapOwner(row) {
    const mapped = mapObjectKeysToCamel(row);
    if (mapped.site_unit !== undefined) {
        mapped.siteUnit = mapped.site_unit;
        delete mapped.site_unit;
    }
    if (mapped.contact_no !== undefined) {
        mapped.contactNo = mapped.contact_no;
        delete mapped.contact_no;
    }
    return mapped;
}
export function mapSociety(row) {
    const mapped = mapObjectKeysToCamel(row);
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
    return mapped;
}
export function mapUser(row) {
    const mapped = mapObjectKeysToCamel(row);
    delete mapped.password;
    return mapped;
}

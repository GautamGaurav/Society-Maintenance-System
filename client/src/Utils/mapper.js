export const snakeToCamel = (s) => s.replace(/_([a-z])/g, (_, ch) => ch.toUpperCase());

export function mapObjectKeysToCamel(row) {
  if (!row || typeof row !== 'object') return row;
  const out = {};
  Object.keys(row).forEach((k) => {
    out[snakeToCamel(k)] = row[k];
  });
  return out;
}

export function mapBuilder(row) { return mapObjectKeysToCamel(row); }
export function mapSite(row) { return mapObjectKeysToCamel(row); }
export function mapSiteUnit(row) { return mapObjectKeysToCamel(row); }
export function mapOwner(row) { return mapObjectKeysToCamel(row); }
export function mapSociety(row) { return mapObjectKeysToCamel(row); }
export function mapUser(row) { const u = mapObjectKeysToCamel(row); delete u.password; return u; }

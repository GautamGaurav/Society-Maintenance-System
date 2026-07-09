// JS shim (ESM) so existing controllers can use the mapper immediately.
export const snakeToCamel = (s) => s.replace(/_([a-z])/g, (_, ch) => ch.toUpperCase());

export function mapObjectKeysToCamel(row) {
  if (!row || typeof row !== 'object') return {};
  const out = {};
  Object.keys(row).forEach((k) => { out[snakeToCamel(k)] = row[k]; });
  return out;
}

export function mapBuilder(row) { return mapObjectKeysToCamel(row); }

export function mapSite(row) {
  const mapped = mapObjectKeysToCamel(row);
  if (mapped.builder !== undefined && mapped.builder !== null) {
    const asNum = Number(mapped.builder);
    if (!Number.isNaN(asNum)) { mapped.builderId = asNum; delete mapped.builder; }
  }
  return mapped;
}

export function mapSiteUnit(row) {
  const mapped = mapObjectKeysToCamel(row);
  if (mapped.ews !== undefined) { mapped.isEws = mapped.ews === 1 || mapped.ews === true; delete mapped.ews; }
  return mapped;
}

export function mapOwner(row) {
  return mapObjectKeysToCamel(row);
}

export function mapSociety(row) {
  return mapObjectKeysToCamel(row);
}

export function mapUser(row) {
  const mapped = mapObjectKeysToCamel(row);
  delete mapped.password;
  return mapped;
}


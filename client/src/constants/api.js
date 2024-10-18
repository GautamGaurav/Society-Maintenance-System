const baseUrl = "http://localhost:3001/api/";

const api = {
    builder: {
        GET: baseUrl + "builders",
        CRUD: baseUrl + "builder"
    },
    site: {
        GET: baseUrl + "sites",
        CRUD: baseUrl + "site"
    },
    siteUnit: {
        GET: baseUrl + "siteUnits",
        CRUD: baseUrl + "siteunit"
    },
    owner: {
        GET: baseUrl + "owners",
        CRUD: baseUrl + "owner"
    }
}

export { baseUrl, api };
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
        GET_ALL_BY_SITE_ID: baseUrl + "siteUnits/:siteId",
        CRUD: baseUrl + "siteunit"
    },
    owner: {
        GET: baseUrl + "owners",
        CRUD: baseUrl + "owner"
    },
    society: {
        GET: baseUrl + "societies",
        GET_BY_ID: baseUrl + "society/",
        CRUD: baseUrl + "society"
    },
    budgetDetail: {
        GET: baseUrl + "budgetDetails",
        CRUD: baseUrl + "budgetDetail"
    }
}

export { baseUrl, api };
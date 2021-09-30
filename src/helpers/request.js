'use strict';
const Regions = require("../constants/regions")

const fetch = require("node-fetch");

var options = {
    fetchOptions: {
        method: 'GET',
        headers: { 'X-Riot-Token': '' }
    },
    defaultRegion: ''
}

/**
 * @param {{ apiKey: String, defaultRegion: (Regions|undefined) }} config
 * @returns Void
 */
function setConfig(config) {
    options.fetchOptions.headers["X-Riot-Token"] = config.apiKey

    if (!Object.values(Regions).includes(config.defaultRegion)) {
        throw new Error("Region: '" + config.defaultRegion + "' is not a valid region");
    } else {
        options.defaultRegion = config.defaultRegion;
    }
}

async function makeRequest(url) {

    if (!options.fetchOptions.headers["X-Riot-Token"]) {
        throw new Error("Api key not found")
    }

    var code;

    const response = await fetch(encodeURI("https://" + url), options.fetchOptions)
        .then(res => {
            code = res.status;
            return res.json();
        });
    
    var res = {
        data: response,
        http_code: code
    }

    if (!res.http_code.toString().startsWith("2")) {
        res.error_msg = response.status.message;
        res.data = "";
    }

    return res;
}

module.exports = {
    options,
    setConfig,
    makeRequest
}
'use strict';

const { regions, endpoints } = require("../constants");
const { makeRequest, options } = require("../helpers/request");

async function summonerRequest(region, path, summoner) {

    if ((region && !Object.values(regions).includes(region)) || (!region && !Object.values(regions).includes(options.defaultRegion))) {
        
        throw new Error("Region: '" + region + "' is not a valid region");

    } else {

        const url = (region ? region : options.defaultRegion)
            + endpoints.base 
            + endpoints.lol.summoner
            + path
            + summoner;
    
        return await makeRequest(url);
    }
}

/**
 * Get a summoner by their name
 * @param {String} summonerName 
 * @param {Region} [region] 
 * @returns {{ data: Object, http_code: Number, error_msg: (String|undefined) }} response
 */
async function getSummonerByName(summonerName, region = "") {

    if ((region && !Object.values(regions).includes(region)) || (!region && !Object.values(regions).includes(options.defaultRegion))) {
        throw new Error("Region: '" + region + "' is not a valid region");
    }

    if (!summonerName) {
        throw new Error("Summoner name not found");
    }

    const url = (region ? region : options.defaultRegion) + endpoints.base + endpoints.lol.summoner + "by-name/" + summonerName;
}

module.exports = {
    getSummonerByName
}
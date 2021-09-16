'use strict';

const { regions, endpoints } = require("../constants");
const { makeRequest, options } = require("../helpers/request");

/**
 * Get a summoner by their name
 * @param {String} summonerName 
 * @param {Region} [region] 
 * @returns {{ data: Object, http_code: Number, error_msg: (String|undefined) }} response
 */
async function getSummonerByName(summonerName, region = "") {

    if (!Object.values(regions).includes(region)) {      
        if (!Object.values(regions).includes(options.defaultRegion)) {
            throw new Error("Region: '" + region + "' is not a valid region");
        }  
    }

    if (!summonerName) {
        throw new Error("Summoner name not found");
    }

    const url = (region ? region : options.defaultRegion) + endpoints.base + endpoints.lol.summoner + "by-name/" + summonerName;

    return await makeRequest(url);
}

module.exports = {
    getSummonerByName
}
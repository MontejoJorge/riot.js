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

    if (!summonerName) {
        throw new Error("Summoner name not found");
    }

    return await summonerRequest(region, "by-name/", summonerName);
}

/**
 * Get a summoner by their id
 * @param {String} encryptedSummonerId 
 * @param {Region} [region] 
 * @returns {{ data: Object, http_code: Number, error_msg: (String|undefined) }} response
 */
async function getSummonerById(summonerId, region = "") {

    if (!summonerId) {
        throw new Error("Summoner id not found");
    }

    return await summonerRequest(region, "", summonerId);
}

/**
 * Get a summoner by their account id
 * @param {String} AccountId
 * @param {Region} [region] 
 * @returns {{ data: Object, http_code: Number, error_msg: (String|undefined) }} response
 */
 async function getSummonerByAccountId(accountId, region = "") {

    if (!accountId) {
        throw new Error("Account id not found");
    }

    return await summonerRequest(region, "by-account/", accountId);
}

/**
 * Get a summoner by their puuuid
 * @param {String} PUUID
 * @param {Region} [region] 
 * @returns {{ data: Object, http_code: Number, error_msg: (String|undefined) }} response
 */
 async function getSummonerByPuuid(puuid, region = "") {

    if (!puuid) {
        throw new Error("puuid not found");
    }

    return await summonerRequest(region, "by-puuid/", puuid);
}

module.exports = {
    getSummonerByName,
    getSummonerById,
    getSummonerByAccountId,
    getSummonerByPuuid
}
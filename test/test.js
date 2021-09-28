require("dotenv").config()

const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');

const expect = chai.expect;
chai.use(chaiAsPromised);
chai.should();

const RiotJS = require("../src");
const regions = RiotJS.constants.regions;

const sumonnerName = "TehKeppler";
const summonerId = "4KZeHQEInXf_nTqpXAnKcwgZ9BIKLWC1supkd_JXPirOtb4";
const summonerAccountId = "nMoaftS2jFSCnvBXibXxGpH4lxuYIW1iCOhKwI1SV8L_5PU";
const summonerPuuid = "WXsIy2mnvlHCdi3NG6-U6J1ucCcpqDPNRKFzdyOs8AqltupEJL6Wvdv93NHKIq8r23orm-QlNBkf1Q";

describe("Riot.js", function () {

    it("ApiKey missing error", async function () {
        return RiotJS.league.summoner.getSummonerByName(sumonnerName, regions.EU_WEST).should.eventually.rejected;
    })

    it("Seting up the config", function () {
        RiotJS.setConfig({
            apiKey: process.env.RIOT_API_KEY,
            defaultRegion: regions.EU_WEST
        });
    })

    describe("League", function () {

        it("Wrong region error", async function () {
            return RiotJS.league.summoner.getSummonerByName(sumonnerName, "not-a-region").should.eventually.rejected;
        })

        it("Get summoner by name", async function () {
            const res = await RiotJS.league.summoner.getSummonerByName(sumonnerName);
            expect(res).to.be.an.instanceOf(Object);
            expect(res.data.id).to.equal(summonerId);
        })

        it("Get summoner by id", async function () {
            const res = await RiotJS.league.summoner.getSummonerById(summonerId);
            expect(res).to.be.an.instanceOf(Object);
            expect(res.data.accountId).to.equal(summonerAccountId);
        })

        it("Get summoner by account id", async function () {
            const res = await RiotJS.league.summoner.getSummonerByAccountId(summonerAccountId);
            expect(res).to.be.an.instanceOf(Object);
            expect(res.data.puuid).to.equal(summonerPuuid);
        })

        it("Get summoner by PUUID", async function () {
            const res = await RiotJS.league.summoner.getSummonerByPuuid(summonerPuuid)
            expect(res).to.be.an.instanceOf(Object);
            expect(res.data.name).to.equal(sumonnerName);
        })

    })
})
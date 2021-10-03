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

        function summonerDataType(res) {
            expect(res).to.be.an.instanceOf(Object);
            expect(res.data.id).to.be.a("string");
            expect(res.data.accountId).to.be.a("string");
            expect(res.data.name).to.be.a("string");
            expect(res.data.puuid).to.be.a("string");
            expect(res.data.profileIconId).to.be.a("number");
            expect(res.data.revisionDate).to.be.a("number");
            expect(res.data.summonerLevel).to.be.a("number");
            expect(res.http_code).to.not.be.oneOf([400, 401, 403, 405]);
        }

        it("Wrong region error", async function () {
            return RiotJS.league.summoner.getSummonerByName(sumonnerName, "not-a-region").should.eventually.rejected;
        })

        it("Get summoner by name", async function () {
            const res = await RiotJS.league.summoner.getSummonerByName(sumonnerName);
            summonerDataType(res);
        })

        it("Get summoner by id", async function () {
            const res = await RiotJS.league.summoner.getSummonerById(summonerId);
            summonerDataType(res);
        })

        it("Get summoner by account id", async function () {
            const res = await RiotJS.league.summoner.getSummonerByAccountId(summonerAccountId);
            summonerDataType(res);
        })

        it("Get summoner by PUUID", async function () {
            const res = await RiotJS.league.summoner.getSummonerByPuuid(summonerPuuid)
            summonerDataType(res);
        })

    })
})
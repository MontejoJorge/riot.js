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
            expect(res.http_code, "Bad request").to.not.be.equal(400);
            expect(res.http_code, "Unauthorized").to.not.be.equal(401);
            expect(res.http_code, "Forbidden").to.not.be.equal(403);
            expect(res.http_code, "Data not found").to.not.be.equal(404);
            expect(res.http_code, "Method not allowed").to.not.be.equal(405);
            expect(res.http_code, "Unsupported media type").to.not.be.equal(415);
            expect(res.http_code, "Rate limit exceeded").to.not.be.equal(429);
            expect(res.http_code, "Internal server error").to.not.be.equal(500);
            expect(res.http_code, "Bad gateway").to.not.be.equal(502);
            expect(res.http_code, "Service unavailable").to.not.be.equal(503);
            expect(res.http_code, "Gateway timeout").to.not.be.equal(504);
            expect(res.data.id).to.be.a("string");
            expect(res.data.accountId).to.be.a("string");
            expect(res.data.name).to.be.a("string");
            expect(res.data.puuid).to.be.a("string");
            expect(res.data.profileIconId).to.be.a("number");
            expect(res.data.revisionDate).to.be.a("number");
            expect(res.data.summonerLevel).to.be.a("number");
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
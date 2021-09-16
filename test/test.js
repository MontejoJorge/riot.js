require("dotenv").config()

const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');

const expect = chai.expect;
chai.use(chaiAsPromised);
chai.should();

const RiotJS = require("../src");
const regions = RiotJS.constants.regions;

describe("Riot.js", function () {

    it("ApiKey missing error", async function () {
        return RiotJS.league.summoner.getSummonerByName("TehKeppler", regions.EU_WEST).should.eventually.rejected;
    })

    it("Seting up the config", function () {
        RiotJS.setConfig({
            apiKey: process.env.RIOT_API_KEY,
            defaultRegion: regions.EU_WEST
        });
    })

    describe("League", function () {

        it("Get summoner by name", async function () {
            const data = await RiotJS.league.summoner.getSummonerByName("TehKeppler");
            expect(data).to.be.an.instanceOf(Object);
        })

        it("Get summoner by name, wrong region", async function () {
            return RiotJS.league.summoner.getSummonerByName("TehKeppler", "not-a-region").should.eventually.rejected;
        })
    })
})
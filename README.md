# Riot.js
![npm version](https://img.shields.io/npm/v/@montejojorge/riot.js?color=green)
![license](https://img.shields.io/github/license/montejojorge/riot.js)

A Riot Games API Wrapper for Node.JS

## Installation
```javascript
npm install @montejojorge/riot.js
```

## Usage
```javascript
const RiotJS = require("@montejojorge/riot.js");
const regions = RiotJS.constants.regions;

RiotJS.setConfig({
    apiKey: "your-api-key"
});

RiotJS.league.summoner.getSummonerByName("TehKeppler", regions.EU_WEST)
    .then(res => console.log(res.data))

```
You can set up a default region in the config:
```javascript
RiotJS.setConfig({
    apiKey: "your-api-key",
    defaultRegion: regions.EU_WEST
});

RiotJS.league.summoner.getSummonerByName("TehKeppler")
    .then(res => console.log(res.data))
```

# Endpoints
## League
### Summoner
- [x] Get a summoner by account ID
- [x] Get a summoner by summoner name
- [x] Get a summoner by PUUID
- [x] Get a summoner by summoner ID
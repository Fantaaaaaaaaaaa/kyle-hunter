const fetch = require('node-fetch')
const cheerio = require('cheerio');
const request = require('request-promise');
const readline = require('readline-promise').default.createInterface({ input: process.stdin, output: process.stdout });
const fs = require('fs');
const { mainModule } = require('process');
const { default: readlinePromise } = require('readline-promise');
const { strictEqual } = require('assert');
const doxFirst = [
    'Raqeem',
    'Andrew',
    'Jacob',
    'Kyle',
    'Ralph',
    'Adam',
    'John',
    'Clark',
    'Bob',
    'Jeff',
    'Juan'
]
const doxLast = [
    'Ursula',
    'Daequan',
    'Phil',
    'Heffley',
    'McDonald',
    'Bich',
    'K. Bheem',
    'LeBron'
]
var currentBrent = 1

console.log("   \x1b[32m[GIBSON_HUNTER]\x1b[0m GIBSON SYSTEMS: ...ONLINE")
console.log("   \x1b[32m[GIBSON_HUNTER]\x1b[0m GIBSON DATABASE: ...ONLINE")
console.log("   \x1b[32m[GIBSON_HUNTER]\x1b[0m GIBSON BOTS: ...ONLINE")
console.log("   \x1b[32m[GIBSON_HUNTER]\x1b[0m DOX CDN: ...ONLINE")
console.log("   \x1b[32m[GIBSON_HUNTER]\x1b[0m ROBLOX PLACE STEALER: ...ONLINE")
console.log("   \x1b[32m[GIBSON_HUNTER]\x1b[0m ROBLONIUM SERVERS: ...ONLINE")
console.log("   \x1b[32m[GIBSON_HUNTER]\x1b[0m LATEST DOX: "+doxFirst[Math.floor(Math.random() * doxFirst.length)]+" "+doxLast[Math.floor(Math.random() * doxLast.length)]+" @ http://dox.roblonium.com/all/archive.7z")

console.log("   \x1b[32m[GIBSON_HUNTER]\x1b[0m INITIALIZING 'BRENTGIBSON' ACCOUNT FINDER (CODENAME GIBSON HUNTER)")
entry()

async function entry(){
    var options = {
        url: "https://users.roblox.com/v1/usernames/users",
        method: "POST",
        transform: function (body, response) {
            if (response.headers['content-type'] === 'application/json') {
                response.body = JSON.parse(body);
            }
            return response;
            return cheerio.load(body);
        },
        body: {"usernames":["BrentGibson"+currentBrent], "excludeBannedUsers":true},
        json: true
    };
    request(options)
        .then(async function(data){
            if(data.body.data[0] != undefined){
                console.log("   \x1b[32m[GIBSON_HUNTER]\x1b[0m GIBSON FOUND // USERNAME : "+data.body.data[0]["name"]+" // PASSWORD : "+data.body.data[0]["name"].split("").reverse().join(""))
            }
            currentBrent++
            return entry()
        })
        .catch(async function(error){
            console.log(error)
            return entry()
        });
}
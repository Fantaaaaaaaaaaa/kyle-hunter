// DIE

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
var current = 1

console.log("   \x1b[34m[BOOT]\x1b[0m GRAPHICTORIA WEBSITE: ONLINE")
console.log("   \x1b[34m[BOOT]\x1b[0m ROBLOX FILE SCRAPERS: ONLINE")
console.log("   \x1b[34m[BOOT]\x1b[0m SIMULPONG.COM: ONLINE")
console.log("   \x1b[34m[BOOT]\x1b[0m SIMULPING.COM: ONLINE")
console.log("   \x1b[34m[BOOT]\x1b[0m RBX.OKTA.COM: ONLINE")
console.log("   \x1b[34m[BOOT]\x1b[0m ROBLOX.LOCAL: ONLINE")
console.log("   \x1b[34m[BOOT]\x1b[0m DOX SYSTEMS: ONLINE")
console.log("   \x1b[34m[BOOT]\x1b[0m LATEST DOX: "+doxFirst[Math.floor(Math.random() * doxFirst.length)]+" "+doxLast[Math.floor(Math.random() * doxLast.length)]+" @ http://dox.roblonium.com/all/archive.7z")

console.log("   \x1b[34m[BOOT]\x1b[0m INITIALIZING ACCOUNT FINDER (CODENAME 7HU6_HUN73R)")
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
        body: {"usernames":["KyleWagner"+current], "excludeBannedUsers":true},
        json: true
    };
    request(options)
        .then(async function(data){
            if(data.body.data[0] != undefined){
                console.log("   \x1b[36m[KYLE]\x1b[0m KYLE FOUND //        USERNAME: "+data.body.data[0]["name"]+" //   PASSWORD: "+data.body.data[0]["name"].split("").reverse().join(""))
            }
            current++
            return entry()
        })
        .catch(async function(error){
            console.log(error)
            return entry()
        });
}
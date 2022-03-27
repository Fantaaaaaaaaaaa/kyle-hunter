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

console.log("   \x1b[36m[BOOT]:\x1b[0m INITIALIZING ACCOUNT FINDER [CODENAME 7HU6_HUN73R]; STANDBY...")
console.log("   \x1b[36m[BOOT]:\x1b[0m DOX SYSTEMS: ONLINE")
console.log("   \x1b[36m[BOOT]:\x1b[0m LATEST DOX: " + doxFirst[Math.floor(Math.random() * doxFirst.length)] + " " + doxLast[Math.floor(Math.random() * doxLast.length)] + " @ http://dox.gtoria.net/all/archive.7z")
entry()

var requestedUser = ""
var txtData = ""
async function entry() {
    txtData = "temp"
    if(!fs.existsSync('./accdmp/')){
        fs.mkdirSync('./accdmp/')
        console.log("   \x1b[93m[APP]:\x1b[0m CREATED: 'accdmp' Folder.")
        if(!fs.existsSync('./accdmp/dump-temp.txt')){
            fs.writeFileSync('./accdmp/dump-temp.txt', txtData)
            console.log("   \x1b[93m[APP]:\x1b[0m CREATED: 'dump-temp' Text Document.")
        }
    }
    requestedUser = await readline.questionAsync(`   \x1b[93m[APP]:\x1b[0m Enter username to begin search (Recommended to use common bot names) \x1b[90m`)
    process.on('SIGINT', async function () {
        console.log("   \x1b[93m[APP]:\x1b[0m SEARCH STOPPED: User ended process.")
        console.log("   \x1b[93m[APP]:\x1b[0m NOTE: Save dump as a different file as it will get overwritten if you run the app again.")
        process.exit()
    });
    main()
}
async function main() {
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
        body: { "usernames": ["" + requestedUser + current], "excludeBannedUsers": true },
        json: true
    };
    request(options)
        .then(async function (data) {
            if (data.body.data[0] != undefined) {
                if (data.body.data[0].name === requestedUser + current) {
                    console.log("   \x1b[92m[ACCOUNT]:\x1b[0m USERNAME: " + data.body.data[0].name + " // PASSWORD: " + data.body.data[0].name.split("").reverse().join(""))
                    txtData = txtData + '[ACCOUNT]: USERNAME: '+data.body.data[0].name+' // PASSWORD: '+data.body.data[0].name.split("").reverse().join("")+'\n'
                    fs.writeFileSync('./accdmp/dump-temp.txt', txtData.trimStart())
                }else{
                    console.log("   \x1b[93m[APP]:\x1b[0m Ignored " + data.body.data[0].name + "; Name didn't match casing.")
                }
            }
            current++
            return main()
        })
        .catch(async function (error) {
            console.log("   \x1b[93m[APP]:\x1b[91m SEARCH STOPPED: Unknown Error.")
            return entry()
        });
}
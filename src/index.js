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

console.log("   [36m[BOOT]:[0m INITIALIZING ACCOUNT FINDER [CODENAME 7HU6_HUN73R]; STANDBY...")
console.log("   [36m[BOOT]:[0m DOX SYSTEMS: ONLINE")
console.log("   [36m[BOOT]:[0m LATEST DOX: " + doxFirst[Math.floor(Math.random() * doxFirst.length)] + " " + doxLast[Math.floor(Math.random() * doxLast.length)] + " @ http://dox.gtoria.net/all/archive.7z")
entry()

var requestedUser = ""
var txtData = ""
async function entry() {
    txtData = "temp"
    logData = "[93m[LOG]\n"
    if (!fs.existsSync('./accdmp/')) {
        fs.mkdirSync('./accdmp/')
        console.log("   [93m[APP]:[0m CREATED: 'accdmp' Folder.")
        if (!fs.existsSync('./accdmp/dump-temp.ansi')) {
            fs.writeFileSync('./accdmp/dump-temp.ansi', txtData)
            console.log("   [93m[APP]:[0m CREATED: 'dump-temp' ANSI File (useful for sharing).")
        }
        if (!fs.existsSync('./accdmp/app-log.log')) {
            fs.writeFileSync('./accdmp/app-log.log', logData)
            console.log("   [93m[APP]:[0m CREATED: 'app-log' Log File.")
        }
    }
    requestedUser = await readline.questionAsync(`   [93m[APP]:[0m Enter username to begin search (Recommended to use common bot names) [90m`)
    process.on('SIGINT', async function () {
        console.log("   [93m[APP]:[0m SEARCH STOPPED: User ended process.")
        console.log("   [93m[APP]:[0m NOTE: Save dump as a different file as it will get overwritten if you run the app again.")
        logData = logData + '[93m[APP]:[0m SEARCH STOPPED: User ended process.\n'
        fs.writeFileSync('./accdmp/app-log.log', logData)
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
                    console.log("   [92m[ACCOUNT]:[0m USERNAME: " + data.body.data[0].name + " // PASSWORD: " + data.body.data[0].name.split("").reverse().join(""))
                    txtData = txtData + '[32m[ACCOUNT]:[0m USERNAME: ' + data.body.data[0].name + ' // PASSWORD: ' + data.body.data[0].name.split("").reverse().join("") + '\n'
                    fs.writeFileSync('./accdmp/dump-temp.ansi', txtData.trimStart())
                } else {
                    console.log("   [93m[APP]:[0m Ignored " + data.body.data[0].name + "; Name didn't match casing.")
                }
            }
            current++
            return main()
        })
        .catch(async function (error) {
            console.log("   [93m[APP]:[91m SEARCH STOPPED: Unknown Error.")
            logData = logData + '[93m[LOG]:[91m ' + error + '\n'
            fs.writeFileSync('./accdmp/app-log.log', logData)
            return entry()
        });
}
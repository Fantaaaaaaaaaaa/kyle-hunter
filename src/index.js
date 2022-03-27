const fetch = require('node-fetch')
const cheerio = require('cheerio');
const request = require('request-promise');
const readline = require('readline-promise').default.createInterface({ input: process.stdin, output: process.stdout });
const fs = require('fs');
const { mainModule } = require('process');
const { default: readlinePromise } = require('readline-promise');
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
const d = new Date();

console.log("   ["+d.getFullYear()+"-"+d.getMonth()+"-"+d.getDate()+"@"+d.getHours()+":"+d.getMinutes()+"]    GIBSON SYSTEMS: ...ONLINE")
console.log("   ["+d.getFullYear()+"-"+d.getMonth()+"-"+d.getDate()+"@"+d.getHours()+":"+d.getMinutes()+"]    GIBSON DATABASE: ...ONLINE")
console.log("   ["+d.getFullYear()+"-"+d.getMonth()+"-"+d.getDate()+"@"+d.getHours()+":"+d.getMinutes()+"]    GIBSON BOTS: ...ONLINE")
console.log("   ["+d.getFullYear()+"-"+d.getMonth()+"-"+d.getDate()+"@"+d.getHours()+":"+d.getMinutes()+"]    DOX CDN: ...ONLINE")
console.log("   ["+d.getFullYear()+"-"+d.getMonth()+"-"+d.getDate()+"@"+d.getHours()+":"+d.getMinutes()+"]    ROBLOX PLACE STEALER: ...ONLINE")
console.log("   ["+d.getFullYear()+"-"+d.getMonth()+"-"+d.getDate()+"@"+d.getHours()+":"+d.getMinutes()+"]    ROBLONIUM SERVERS: ...ONLINE")
console.log("   ["+d.getFullYear()+"-"+d.getMonth()+"-"+d.getDate()+"@"+d.getHours()+":"+d.getMinutes()+"]    LATEST DOX: "+doxFirst[Math.floor(Math.random() * doxFirst.length)]+" "+doxLast[Math.floor(Math.random() * doxLast.length)]+" @ http://dox.roblonium.com/all/archive.7z")

entry()

async function entry(){

}
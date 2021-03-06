/**
 * Dieses Modul wurde fΓΌr das Projekt LNM Technik entwickelt!
 * Es ist eine Erweiterung der allgemeinen Konsole.
 * 
 * Bitte dieses Modul nicht ohne Namensnennung verwenden!
 * By Loui
 */

const { console } = require('./console')
const packagefile = require('../package.json')

module.exports = class {

    /**
     * 
     * @param {PORT} PORT 
     * @param {IP} IP 
     * @param {KEY} KEY 
     * @param {NAME} NAME 
     */

    static serverinformations(PORT, IP, KEY, NAME) {

        console.log("Server Informations:");
        console.log("π Server Name: " + NAME);
        console.log("π Server IP: " + IP);
        console.log("π Server Port: " + PORT);
        console.log(" ");
        console.log(" ");
        console.log("DEV Informations:");
        console.log("π Pack Name: " + packagefile.name)
        console.log("π Pack Version: " + packagefile.version)
        console.log("π Pack Autor: " + packagefile.author)
        console.log("π Pack Beschreibung: " + packagefile.description)
        console.log("π Pack Scripte: " + JSON.stringify(packagefile.scripts))
        console.log("π Pack Main: " + packagefile.main)
        console.log("π Pack Lizenz: " + packagefile.license)
        console.log("π Server KEY: " + KEY);
        console.log("π Server NAME: " + require('../storage/connected_devices.json').devices[0].name)
        console.log(" ");
        console.log(" ");
    }

}

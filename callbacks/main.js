//JSON
//JavaScript Object Notation

function main1() {

    frisieren(abgeschlossen)

}

function abgeschlossen(preis) {
    console.log("Finaler Preis: " + preis)
}

function frisieren(callback) {
    console.log("Hund fertig frisiert");
    setTimeout(() => {
        callback(10);
    }, 2000);
}

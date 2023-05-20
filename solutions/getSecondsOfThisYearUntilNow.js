
function getSecondsOfThisYearUntilNow() {
    let millis = Date.now();
    let years = Math.trunc(millis / 1000 / 60 / 60 / 24 / 365);
    let thisYearMillis = millis - (years * 365 * 24 * 60 * 60 * 1000);
    return thisYearMillis / 1000;
}

export default getSecondsOfThisYearUntilNow;


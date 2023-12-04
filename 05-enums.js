/* enum: datatypes: holds the set of constants
    1. string
    2. number
    3. hetergenous
*/
/* 1. number enums */
var Priority;
(function (Priority) {
    Priority[Priority["VERY_HIGH"] = 0] = "VERY_HIGH";
    Priority[Priority["HIGH"] = 1] = "HIGH";
    Priority[Priority["MEDIUM"] = 2] = "MEDIUM";
    Priority[Priority["LOW"] = 3] = "LOW";
    Priority[Priority["VERY_LOW"] = 4] = "VERY_LOW";
})(Priority || (Priority = {}));
console.log(Priority);
console.log(Priority.VERY_HIGH);
console.log(Priority.MEDIUM);
console.log(Priority['VERY_LOW']);
var Grades;
(function (Grades) {
    Grades[Grades["D"] = 0] = "D";
    Grades[Grades["C"] = 50] = "C";
    Grades[Grades["B"] = 51] = "B";
    Grades[Grades["A"] = 52] = "A";
    Grades[Grades["O"] = 53] = "O";
})(Grades || (Grades = {}));
console.log(Grades);
var BrowserVersions;
(function (BrowserVersions) {
    BrowserVersions[BrowserVersions["Chrome"] = 111] = "Chrome";
    BrowserVersions[BrowserVersions["Firefox"] = 93] = "Firefox";
    BrowserVersions[BrowserVersions["Safari"] = 14] = "Safari";
    BrowserVersions[BrowserVersions["Edge"] = 87] = "Edge";
})(BrowserVersions || (BrowserVersions = {}));
console.log(BrowserVersions);
var SafariVersion;
(function (SafariVersion) {
    // LATEST = getLatestBrowserVersion('safari'), // we cant initialize current value without next value when we are using methods
    // LATEST_1 = 10, // but we could set number directly but not method
    SafariVersion[SafariVersion["LATEST_1"] = 0] = "LATEST_1";
    SafariVersion[SafariVersion["LATEST_2"] = 1] = "LATEST_2";
    SafariVersion[SafariVersion["LATEST_3"] = 2] = "LATEST_3";
    SafariVersion[SafariVersion["LATEST_4"] = getLatestBrowserVersion('safari') - 4] = "LATEST_4";
    SafariVersion[SafariVersion["LATEST"] = getLatestBrowserVersion('safari')] = "LATEST";
})(SafariVersion || (SafariVersion = {}));
console.log(SafariVersion);
function getLatestBrowserVersion(browser) {
    if (browser === 'chrome') {
        return BrowserVersions.Chrome;
    }
    else if (browser === 'firefox') {
        return BrowserVersions.Firefox;
    }
    else if (browser === 'safari') {
        return BrowserVersions.Safari;
    }
    else if (browser === 'edge') {
        return BrowserVersions.Edge;
    }
    else {
        return 0;
    }
}
/* 02. string enums */
var Environment;
(function (Environment) {
    Environment["PRODUCTION"] = "https://production.app.com";
    Environment["DEVELOPMENT"] = "https://development.app.com";
    Environment["TESTING"] = "https://testing.app.com";
    Environment["STAGING"] = "https://staging.app.com";
    Environment["AUTOMATION"] = "https://automation.app.com";
})(Environment || (Environment = {}));
console.log(Environment);
console.log(Environment.AUTOMATION);
console.log(Environment['PRODUCTION']); // this way also we can use to access the enum item

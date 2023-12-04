
/* enum: datatypes: holds the set of constants 
    1. string
    2. number
    3. hetergenous
*/


/* 1. number enums */
enum Priority {
    VERY_HIGH, // by default starts with 0
    HIGH,
    MEDIUM,
    LOW,
    VERY_LOW
}
console.log(Priority)
console.log(Priority.VERY_HIGH)
console.log(Priority.MEDIUM)
console.log(Priority['VERY_LOW']) // this is also accepted while accessing thge enums

enum Grades {
    D, // by default starts with 0
    C=50,
    B, // can be assigned with the next value of previously defined
    A,
    O
}
console.log(Grades);

enum BrowserVersions {
    Chrome = 111,
    Firefox = 93,
    Safari = 14,
    Edge = 87,
}
console.log(BrowserVersions)

enum SafariVersion {
    // LATEST = getLatestBrowserVersion('safari'), // we cant initialize current value without next value when we are using methods
    // LATEST_1 = 10, // but we could set number directly but not method
    LATEST_1,
    LATEST_2,
    LATEST_3,
    LATEST_4 = getLatestBrowserVersion('safari') - 4,
    LATEST = getLatestBrowserVersion('safari'),
}
console.log(SafariVersion)

function getLatestBrowserVersion(browser: string) {
    if(browser==='chrome') {
        return BrowserVersions.Chrome;
    } else if(browser==='firefox') {
        return BrowserVersions.Firefox;
    } else if(browser==='safari') {
        return BrowserVersions.Safari;
    } else if(browser==='edge') {
        return BrowserVersions.Edge;
    } else {
        return 0;
    }
}


/* 02. string enums */
enum Environment {
    PRODUCTION = 'https://production.app.com',
    DEVELOPMENT = 'https://development.app.com',
    TESTING = 'https://testing.app.com',
    STAGING = 'https://staging.app.com',
    AUTOMATION = 'https://automation.app.com',
}
console.log(Environment)
console.log(Environment.AUTOMATION)
console.log(Environment['PRODUCTION']) // this way also we can use to access the enum item


/* 02. heterogenous enums */
enum Properties {
    BROWSER = 'chrome',
    VERSION = 119,
    ENVIRONMENT , //can be used as empty if the previous property is assigned with number
    // HEADLESS = true,
    HEADLESS = 'true',
    PLATFORM = 'macOS',
}


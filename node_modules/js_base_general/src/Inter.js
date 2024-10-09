

function Inter() {

};

Inter.prototype.default = function(name) {
    switch (name) {
        case "country":
            return "ua";
        case "language":
            return 'en';
        case "currency":
            return "uah";
    }
}

Inter.prototype.countries = function() {
    return ([
        'ua',
        "us",
        "de",
        "gb"
    ])
};

Inter.prototype.currencies = function() {
    return ([
        "gbp",
        "uah",
        "usd",
        "eur"
    ])
}

Inter.prototype.languages = function() {
    return ([
        'de',
        'en',
        'uk',
        'ru',

        // TODO: OTHER too: mb integration with AI and translators for localization and internalization - more translations;
    ])
}



export default Inter;

// TODO: from payment system;

/*jslint browser: true*/
/*global $, jQuery, alert*/

var
    FALLBACK_LOCALE = 'cs-cz',

    language_lookup = {
        // https://en.wikipedia.org/wiki/English_language#Geographical_distribution
        "en"    : "en-us",

        // https://en.wikipedia.org/wiki/Czech_language#Geographic_distribution
        "cs"    : "cs-cz",
        "sk"    : "cs-cz",
        "sk-sk" : "cs-cz"
    },

    region_lookup = {
        // http://www.nationsonline.org/oneworld/countries_by_languages.htm

        // https://en.wikipedia.org/wiki/English_language#Geographical_distribution    
        "us"    : "en-us",
        "ca"    : "en-us",
        "vi"    : "en-us",

        "gi"    : "en-gb",
        "ie"    : "en-gb",
        "gb"    : "en-gb",
        "uk"    : "en-gb",
        "au"    : "en-gb",
        "in"    : "en-gb",
        "mt"    : "en-gb",
        "nz"    : "en-gb",
        "ph"    : "en-gb",
        "sg"    : "en-gb",
        "za"    : "en-gb",
        "bw"    : "en-gb",
        "cm"    : "en-gb",
        "gm"    : "en-gb",
        "gh"    : "en-gb",
        "ke"    : "en-gb",
        "ls"    : "en-gb",
        "ly"    : "en-gb",
        "mw"    : "en-gb",
        "mu"    : "en-gb",
        "na"    : "en-gb",
        "ng"    : "en-gb",
        "rw"    : "en-gb",
        "sc"    : "en-gb",
        "sl"    : "en-gb",
        "sz"    : "en-gb",
        "ug"    : "en-gb",
        "zm"    : "en-gb",
        "zw"    : "en-gb",
        "ai"    : "en-gb",
        "ag"    : "en-gb",
        "bs"    : "en-gb",
        "bb"    : "en-gb",
        "bz"    : "en-gb",
        "dm"    : "en-gb",
        "gd"    : "en-gb",
        "gy"    : "en-gb",
        "jm"    : "en-gb",
        "kn"    : "en-gb",
        "lc"    : "en-gb",
        "tt"    : "en-gb",
        "vg"    : "en-gb",
        "bn"    : "en-gb",
        "pk"    : "en-gb",
        "lk"    : "en-gb",
        "as"    : "en-gb",
        "fj"    : "en-gb",
        "gu"    : "en-gb",
        "ki"    : "en-gb",
        "mh"    : "en-gb",
        "fm"    : "en-gb",
        "nr"    : "en-gb",
        "mp"    : "en-gb",
        "pw"    : "en-gb",
        "pn"    : "en-gb",
        "ws"    : "en-gb",
        "sb"    : "en-gb",
        "to"    : "en-gb",
        "tv"    : "en-gb",
        "vu"    : "en-gb",

        // https://en.wikipedia.org/wiki/Czech_language#Geographic_distribution
        "cz"    : "cs-cz",
        "sk"    : "cs-cz"
    },

    dir_lookup = {
        "en-us" : "/en/",
        "en-gb" : "/en/",
        "cs-cz" : "/"       // root
    };
    
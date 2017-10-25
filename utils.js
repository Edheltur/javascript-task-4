'use strict';

exports.fromEntriesToObject = function (entries) {
    let result = {};
    for (let [key, value] of entries) {
        result[key] = value;
    }

    return result;
};

exports.containsIn = function (args) {
    return ([key]) => Array.from(args).indexOf(key) >= 0;
};


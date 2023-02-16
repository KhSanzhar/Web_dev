"use strict";

function powerOf(a, b) {

    let result = a;
    for(let i = 0; i < b; i++) {
        result *= a;
    }
    return result;
}
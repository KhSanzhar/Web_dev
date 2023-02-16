"use strict";

function multiplyNumeric(obj) {
    for(let i in obj) {
        if (typeof obj[i] == 'number') {
            obj[i] *= 2;
        }
    }
}

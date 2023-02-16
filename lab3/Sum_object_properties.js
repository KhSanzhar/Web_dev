"use strict";

function sumOf(obj) {
    let sum = 0;
    for(let i in obj) {
        sum += obj[i];
    }
    return sum;
}
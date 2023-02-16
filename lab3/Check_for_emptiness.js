"use strict";

function isEmpty(obj) {
    for(let i in obj) {
        return false;
    }
    return true;
}


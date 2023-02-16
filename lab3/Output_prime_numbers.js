"use strict";

let n = prompt("Enter a number: ", 2);

for(let i = 2; i <= n; i++) {
    let flag = false;
    for(let j = 2; j <= (i**(1/2)); j++) {
        if(i % j == 0) {
            flag = true;
            break;
        }
    }
    if(flag) {
        continue;
    } else {
        alert(i);
    }
}
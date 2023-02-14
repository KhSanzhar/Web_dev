function makeUser() {
    return {
        name: "John",
        ref: this
    };
}

let user = makeUser();

alert(user.ref.name); // What's the result?

//2
function makeUser() {
    return {
        name: "John",
        ref() {
            return this;
        }
    };
}

let user = makeUser();

alert(user.ref().name); // John
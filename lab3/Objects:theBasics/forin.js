let user = {
    name: "John",
    age: 30,
    isAdmin: true,
}

for (let key in user) {
    alert(key)
    alert(user[key])
}
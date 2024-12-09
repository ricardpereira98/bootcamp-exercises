const Person = {
    name: "Ricardo",
    age: 26,
    role: "Rockstar Developer"
}

Object.keys(Person).forEach(key => { console.log(key + ":", Person[key]) })

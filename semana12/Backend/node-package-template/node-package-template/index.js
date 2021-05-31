const countries = require("./countries")
const query = process.argv[2];
console.log(query)

const result = countries.filter(
    (country) => country.name.toLowerCase().includes(query.toLocaleLowerCase())
);

console.table(result);
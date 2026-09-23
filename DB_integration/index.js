const pg = require('pg')
const {Client} = pg

const cl = new Client({
    host: 'localhost'
})
console.log(pg)
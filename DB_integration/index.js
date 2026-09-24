const pg = require('pg')
const {Client} = pg

const cl = new Client({
    host: 'localhost',
    database: 'postgres',
    user: 'lakshaygoyal',
    port: 5432,
})

module.exports = { cl, connection }

async function connection() {
    try{
        await cl.connect()
        console.log('Connected to the database')
    }
    catch(err){
        console.log(err)
    }
}


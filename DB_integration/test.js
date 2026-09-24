const { cl, connection } = require('./index.js')
const stud_id = 1
connection().then(() => {
  cl.query('select * from students')
    .then(res => console.log(res.rows))
    .catch(err => console.log(err))
    .finally(() => cl.end())
})
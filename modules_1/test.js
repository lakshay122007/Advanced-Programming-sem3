//we use require function to import modules in common js -

// const res = require("./script")

const fs = require("fs")

// console.log(fs)

fs.readFile("info.txt", "utf-8", (err, data) =>{
    console.log(data)
})

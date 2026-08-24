const fs = require("fs")

const mem = process.memoryUsage().rss/1024/1024
console.log(mem)

fs.readFile("big_data.csv", "utf-8", (err, data) => {
    const mem1 = process.memoryUsage().rss/1024/1024
    console.log(mem1)
})
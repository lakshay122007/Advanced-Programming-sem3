const http = require("http")
// console.log(http)

const server = http.createServer((req,res) => {
    // console.log(req)
    // console.log(res)

    // res.write("yo yo")
    res.writeHead(200, {
        'Content-type': "text/html"
    })
    res.end("<i>bye</i>")
    // res.statusCode
    res.setHeader()
})
server.listen(3000, () => {
    console.log("YES YES")
})





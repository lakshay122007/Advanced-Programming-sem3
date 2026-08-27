const http = require("http")
// console.log(http)

const server = http.createServer((req,res) => {
    // console.log(req)
    // console.log(res)

    res.write("yo yo")
    // res.writeHead(200, {
    //     'Content-type': "text/html"
    // })
    res.end()
    // res.statusCode
    // res.setHeader()
})
server.listen(3000, () => {
    console.log("YES YES")
})




// http.createServer((req, res) => {
//     res.end("Response Complete");
//     res.writeHead(200, { 'Content-Type': 'text/plain' });
// }).listen(3000);



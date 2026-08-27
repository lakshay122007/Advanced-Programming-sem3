const http = require('http');
const dotenv = require('dotenv');

dotenv.config()

const server = http.createServer((req,res) => {
    console.log(req.method)
    console.log(req.url)
    if (req.url == "/image") {
        res.end("Image is Here")
    }
    else{
        res.end("End server")
    }
})

server.listen(process.env.PORT, () => {
    console.log("Server is Running 🏃")
})
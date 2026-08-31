const http = require("http")
const {users,posts} = require("./data.js")

// console.log(users);

const server = http.createServer((req,res) => {
    console.log(req.url)
    console.log(req.method)
    const path = req.url;
    const arr = path.split("/")
    const id = Number(arr[2])

    res.writeHead(200, {
        'Content-Type' : "application/json"
    })
    if(req.url == "/users"){
        res.end(JSON.stringify(users));
    }
    else if(req.url == `/users/${id}`){
        const obj = users.find((obj) => obj.id === id)
        res.end(JSON.stringify(obj))
    }
})

server.listen(3000, () => {
    console.log("server is running 🏃")
})
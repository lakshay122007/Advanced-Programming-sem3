const express = require("express");

const app = express()
app.use(express.json()) //parse incoming requests with JSON payloads.

// middleware function - it is a function that has access to the request object, 
// response object and the next middleware function in the application’s request-response cycle. 
// The next middleware function is commonly denoted by a variable named next.

//app level middleware

app.use((req,res,next) =>{
    console.log(`${req.method} -  ${req.url}`)
    next() //transfer control to the next middleware function
})
//route level middleware 
const country = (req,res, next) => {
    if(req.headers['country']){
        console.log("YESS")
        next()
    }
    else{
        res.send("Country header is missing")
    }
    
}

app.get("/users", country, (req,res) =>{
    res.send("Users Data")
})

app.get("/posts" , (req,res) =>{
    res.send("Users Posts")
})

app.listen(3000, () => {
    console.log("Server Running 🏃‍♀️")
})


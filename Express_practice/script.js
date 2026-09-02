const express = require("express")
const { users, posts } = require("./data.js");

// console.log(express)

const app = express();

// console.log(app)

app.get("/users", (req,res) => {
    res.send(users)
})

app.get("/users/:id", (req,res) => {
    const id = Number(req.params.id)
    const user = users.find((user) => user.id === id)
    res.send(user)

})

app.get("/posts", (req,res) => {
    const minLikes = Number(req.query.minLikes)
    const filteredPosts = posts.filter((post) => post.likes >= minLikes)
    res.send(filteredPosts)
})


app.post("/users", (req,res) => {
    const newUser = req.body;
    users.push(newUser);
    res.send(newUser);
})

app.listen(3000)
// const http = require("http")
// // console.log(http)

// const server = http.createServer((req,res) => {
//     // console.log(req)
//     // console.log(res)

//     res.write("yo yo")
//     // res.writeHead(200, {
//     //     'Content-type': "text/html"
//     // })
//     res.end()
//     // res.statusCode
//     // res.setHeader()
// })
// server.listen(3000, () => {
//     console.log("YES YES")
// })




// http.createServer((req, res) => {
//     res.end("Response Complete");
//     res.writeHead(200, { 'Content-Type': 'text/plain' });
// }).listen(3000);


//-------------------------------------------------------------//


const users = [
  {
    id: 101,
    name: "Vinayak",
    email: "vinayak@example.com"
  },
  {
    id: 102,
    name: "Mayank",
    email: "mayank@example.com"
  },
  {
    id: 103,
    name: "Jhanvi",
    email: "jhanvi@example.com"
  },
  {
    id: 104,
    name: "Vanisha",
    email: "Vanisha@example.com"
  }
];

const posts = [
  {
    id: 500,
    userId: 101,
    title: "My First Week as a Developer",
    content: "This week I built my first REST API and learned how HTTP methods work.",
    category: "career",
    likes: 42,
  },
  {
    id: 501,
    userId: 102,
    title: "Easy Recipes for Busy Developers",
    content: "Here are a few quick meals I make when I don't have much time to cook.",
    category: "lifestyle",
    likes: 18,
  },
  {
    id: 502,
    userId: 101,
    title: "Understanding REST APIs",
    content: "REST APIs become much easier once you understand resources, endpoints, and HTTP methods.",
    category: "technology",
    likes: 67,
  },
  {
    id: 503,
    userId: 103,
    title: "My Favorite Weekend Hikes",
    content: "A few beautiful hiking trails I discovered this summer.",
    category: "travel",
    likes: 31,
  },
  {
    id: 504,
    userId: 102,
    title: "JavaScript Tips I Wish I Knew Earlier",
    content: "These small JavaScript concepts helped me write cleaner and more readable code.",
    category: "technology",
    likes: 85,
  },
  {
    id: 505,
    userId: 104,
    title: "How I Plan My Workday",
    content: "A simple routine that helps me stay focused and finish important tasks.",
    category: "productivity",
    likes: 24,
  },
  {
    id: 506,
    userId: 103,
    title: "Building My First Node.js Server",
    content: "I created a server using Node.js without Express and learned how requests and responses work.", 
    category: "technology",
    likes: 73,
  },
  {
    id: 507,
    userId: 104,
    title: "A Weekend in Mussoorie",
    content: "Spent the weekend exploring the hills, enjoying the cool weather, and walking through the beautiful streets of Mussoorie.",
    category: "travel",
    likes: 39,
  }
];

module.exports = {posts,users}

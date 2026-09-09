const express = require('express');
const route = express.router()

route.get("/users", (req, res) => {
  res.json(users);
});

route.get("/users/:id", (req, res) => {
  const id = Number(req.params.id);

  const user = users.find((user) => {
    return user.id === id;
  });

  if (!user) {
    return res.status(404).json({
      message: "User not found",
    });
  }

  res.json(user);
});

route.post("/users", (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({
      message: "Name and email are required",
    });
  }

  const newUser = {
    id: users.length + 1,
    name: name,
    email: email,
  };

  users.push(newUser);

  res.status(201).json(newUser);
});

route.put("/users/:id", (req, res) => {
  const id = Number(req.params.id);

  const user = users.find((user) => {
    return user.id === id;
  });

  if (!user) {
    return res.status(404).json({
      message: "User not found",
    });
  }

  user.name = req.body.name || user.name;
  user.email = req.body.email || user.email;

  res.json(user);
});

route.delete("/users/:id", (req, res) => {
  const id = Number(req.params.id);

  const index = users.findIndex((user) => {
    return user.id === id;
  });

  if (index === -1) {
    return res.status(404).json({
      message: "User not found",
    });
  }

  users.splice(index, 1);

  res.json({
    message: "User deleted",
  });
});

module.exports = route;
const express = require("express");
const userRoute = require("./routes/userRoute");
const app = express();

app.use("/users", userRoute);

app.use(express.json());

let users = [
  { id: 1, name: "", email: "@gmail.com" },
  { id: 2, name: "", email: "@gmail.com" },
  { id: 3, name: "", email: "@gmail.com" },
];

let products = [
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Mouse", price: 1000 },
  { id: 3, name: "Keyboard", price: 2500 },
];

let orders = [
  { id: 1, userId: 1, productId: 2, quantity: 2 },
  { id: 2, userId: 2, productId: 1, quantity: 1 },
];

app.get("/users", (req, res) => {
  res.json(users);
});

app.get("/users/:id", (req, res) => {
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

app.post("/users", (req, res) => {
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

app.put("/users/:id", (req, res) => {
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

app.delete("/users/:id", (req, res) => {
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

app.get("/products", (req, res) => {
  res.json(products);
});

app.get("/products/:id", (req, res) => {
  const id = Number(req.params.id);

  const product = products.find((product) => {
    return product.id === id;
  });

  if (!product) {
    return res.status(404).json({
      message: "Product not found",
    });
  }

  res.json(product);
});

app.post("/products", (req, res) => {
  const { name, price } = req.body;

  if (!name || !price) {
    return res.status(400).json({
      message: "Name and price required",
    });
  }

  const product = {
    id: products.length + 1,
    name: name,
    price: price,
  };

  products.push(product);

  res.status(201).json(product);
});

app.put("/products/:id", (req, res) => {
  const id = Number(req.params.id);

  const product = products.find((product) => {
    return product.id === id;
  });

  if (!product) {
    return res.status(404).json({
      message: "Product not found",
    });
  }

  product.name = req.body.name || product.name;
  product.price = req.body.price || product.price;

  res.json(product);
});

app.delete("/products/:id", (req, res) => {
  const id = Number(req.params.id);

  const index = products.findIndex((product) => {
    return product.id === id;
  });

  if (index === -1) {
    return res.status(404).json({
      message: "Product not found",
    });
  }

  products.splice(index, 1);

  res.json({
    message: "Product deleted",
  });
});

app.get("/orders", (req, res) => {
  res.json(orders);
});

app.get("/orders/:id", (req, res) => {
  const id = Number(req.params.id);

  const order = orders.find((order) => {
    return order.id === id;
  });

  if (!order) {
    return res.status(404).json({
      message: "Order not found",
    });
  }

  res.json(order);
});

// Create order
app.post("/orders", (req, res) => {
  const { userId, productId, quantity } = req.body;

  const user = users.find((user) => {
    return user.id === userId;
  });

  if (!user) {
    return res.status(404).json({
      message: "User does not exist",
    });
  }

  const product = products.find((product) => {
    return product.id === productId;
  });

  if (!product) {
    return res.status(404).json({
      message: "Product does not exist",
    });
  }

  const newOrder = {
    id: orders.length + 1,
    userId: userId,
    productId: productId,
    quantity: quantity || 1,
  };

  orders.push(newOrder);

  res.status(201).json(newOrder);
});

app.put("/orders/:id", (req, res) => {
  const id = Number(req.params.id);

  const order = orders.find((order) => {
    return order.id === id;
  });

  if (!order) {
    return res.status(404).json({
      message: "Order not found",
    });
  }

  order.quantity = req.body.quantity || order.quantity;

  res.json(order);
});

app.delete("/orders/:id", (req, res) => {
  const id = Number(req.params.id);

  const index = orders.findIndex((order) => {
    return order.id === id;
  });

  if (index === -1) {
    return res.status(404).json({
      message: "Order not found",
    });
  }

  orders.splice(index, 1);

  res.json({
    message: "Order deleted",
  });
});
app.get("/search/users", (req, res) => {
  const name = req.query.name;

  const result = users.filter((user) => {
    return user.name.toLowerCase().includes(name.toLowerCase());
  });

  res.json(result);
});

app.get("/search/products", (req, res) => {
  const name = req.query.name;

  const result = products.filter((product) => {
    return product.name.toLowerCase().includes(name.toLowerCase());
  });

  res.json(result);
});

app.get("/users/:id/orders", (req, res) => {
  const userId = Number(req.params.id);

  const userOrders = orders.filter((order) => {
    return order.userId === userId;
  });

  res.json(userOrders);
});

app.get("/products/:id/orders", (req, res) => {
  const productId = Number(req.params.id);

  const productOrders = orders.filter((order) => {
    return order.productId === productId;
  });

  res.json(productOrders);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

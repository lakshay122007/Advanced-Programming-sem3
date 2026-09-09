const express = require("express");
const route = express.Router(); 




route.get("/products", (req, res) => {
  res.json(products);
});

route.get("/products/:id", (req, res) => {
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

route.post("/products", (req, res) => {
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

route.put("/products/:id", (req, res) => {
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

route.delete("/products/:id", (req, res) => {
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

module.exports = route;
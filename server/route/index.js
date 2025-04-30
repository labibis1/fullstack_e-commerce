const express = require("express");
const router = express.Router();
const auth = require("./auth");
const category = require("./category");
const product = require("./product");
const cart = require("./cart")

// http://localhost:3000/auth
router.use("/auth", auth);

// http://localhost:3000/category
router.use("/category", category);

// http://localhost:3000/product
router.use("/product", product);

// http://localhost:3000/cart
router.use("/cart", cart );



module.exports = router;

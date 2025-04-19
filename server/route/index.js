const express = require("express");
const router = express.Router();
const auth = require("./auth");
const category = require("./category");
const product = require("./product");

// http://localhost:3000/auth
router.use("/auth", auth);

// http://localhost:3000/category
router.use("/category", category);

// http://localhost:3000/product
router.use("/product", product);

module.exports = router;

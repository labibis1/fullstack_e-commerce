const express = require("express");
const { addtoCartController, allCartinfoController } = require("../../config/controllers/cartController");
const router = express.Router();

// http://localhost:3000/cart/addtocart
router.post("/addtocart", addtoCartController );

// http://localhost:3000/cart/usercartlist
router.get("/usercartlist/:id", allCartinfoController)

module.exports = router;
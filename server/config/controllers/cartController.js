const cartModel = require("../../models/cartModel");

async function addtoCartController(req, res) {
  let { productid, quantity, userid } = req.body;

  try {
    let cart = new cartModel({
      productid,
      quantity,
      userid,
    });
    await cart.save();

    res.status(201).json({ success: true, msg: "product added to cart" });
  } catch (error) {
    return res.status(500).json({ success: false, msg: error });
  }
}

async function allCartinfoController(req, res) {
  try {
    let { id } = req.params;
    let findcart = await cartModel.find({userid:id}).populate("productid")
    res.status(200).json({success: true, data: findcart})


  } catch (error) {
    return res.status(500).json({ success: false, msg: error });
  }
}

module.exports = { addtoCartController, allCartinfoController };

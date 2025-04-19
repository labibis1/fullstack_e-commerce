const categoryModel = require("../../models/categoryModel");
const productModel = require("../../models/productModel");

async function CreateProductController(req, res) {
  let {
    title,
    description,
    color,
    stock,
    discountprice,
    sellingprice,
    category,
  } = req.body;

  try {
    let productcreate = new productModel({
      title,
      description,
      color,
      stock,
      discountprice,
      sellingprice,
      category,
      image: req.files.forEach(
        (item) => `http://localhost:3000/${item.filename}`
      ),
    });
    await productcreate.save();
    let categoryupdate = await categoryModel.findOneAndUpdate(
      {
        _id: productcreate.category,
      },
      { $push: { product: productcreate._id } }, 
      {new: true}
    );
    await categoryupdate.save();

    return res
      .status(201)
      .json({ msg: "product created successfully", data: productcreate });
  } catch (error) {
    return res
      .status(500)
      .json({ err: error.message ? error.message : error, success: false });
  }
}


async function getAllproductController(req,res) {
try {
  
const products = await productModel.find({})

res.status(200).json({msg: "product fetch success", success: true, products})

} catch (error) {
  return res
  .status(500)
  .json({ err: error.message ? error.message : error, success: false });

}  
}

module.exports = { CreateProductController, getAllproductController };

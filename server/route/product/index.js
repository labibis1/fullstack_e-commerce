const express = require("express");
const {
  CreateProductController,
  getAllproductController,
} = require("../../config/controllers/productController");
const multer = require("multer");
const router = express.Router();

// config multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    let filename = file.originalname.split(".");
    let extension = filename[filename.length - 1];

    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix + `.${extension}`);
  },
});

const upload = multer({ storage: storage });


 // http://localhost:3000/product/createproduct
router.post("/createproduct", upload.array("images", 5), CreateProductController);


router.get("/products", getAllproductController)


module.exports = router;

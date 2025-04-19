const express = require("express");
const multer = require("multer");

const {
  createCategoryController,
  fetchAllCategoriesController,
  singleCategoryController,
  deleteCategoryController,
  updateCategoryController,
} = require("../../config/controllers/categoryController");
const { route } = require("../auth");
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

// http://localhost:3000/category/createcategory
router.post(
  "/createcategory",
  upload.single("image"),
  createCategoryController
);

router.get("/allcategories", fetchAllCategoriesController);
router.get("/singlecategory/:id", singleCategoryController);
router.delete("/deletecategory/:id", deleteCategoryController);
router.patch(
  "/updatecategory/:id",
  upload.single("image"),
  updateCategoryController
);
module.exports = router;

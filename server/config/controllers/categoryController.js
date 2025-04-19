const categoryModel = require("../../models/categoryModel");
const path = require("path");
const fs = require("fs");

async function createCategoryController(req, res) {
  let { title, description } = req.body;
  let { filename } = req.file;

  try {
    let category = new categoryModel({
      title,
      description,
      image: `http://localhost:3000/${filename}`,
    });
    await category.save();
    res.status(201).json({
      success: true,
      msg: "category created successfully",
      data: category,
    });
  } catch (error) {
    res
      .status(500)
      .json({ err: error.message ? error.message : error, success: false });
  }
}

async function fetchAllCategoriesController(req, res) {
  try {
    let category = await categoryModel.find({});
    return res.status(200).json({
      success: true,
      msg: "category fetch successfull",
      data: category,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ err: error.message ? error.message : error, success: false });
  }
}

async function singleCategoryController(req, res) {
  let { id } = req.params;
  try {
    let singlecategory = await categoryModel.findOne({ _id: id });

    return res.status(200).json({
      success: true,
      msg: "single category fetch successfull",
      data: singlecategory,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ err: error.message ? error.message : error, success: false });
  }
}

async function deleteCategoryController(req, res) {
  let { id } = req.params;
  let findcategory = await categoryModel.findOne({ _id: id });
  if (!findcategory) {
    return res.status(404).json({ success: false, msg: "Category not found" });
  } else {
    let existingpath = path.join(__dirname, "../../uploads");
    let existingCategory = await categoryModel.findOneAndDelete({ _id: id });

    let splitpath = existingCategory.image.split("/");
    let imagepath = splitpath[splitpath.length - 1];

    fs.unlink(`${existingpath}/${imagepath}`, (err) => {
      console.log(err);
    });

    res.status(200).json({
      success: true,
      msg: "Category deleed successfully",
      data: findcategory,
    });
  }
}

async function updateCategoryController(req, res) {
  let { id } = req.params;
  let { title } = req.body; 
  let { filename } = req.file;

  try {
    if (title && filename) {
      let existingpath = path.join(__dirname, "../../uploads");
      let existingCategory = await categoryModel.findOneAndUpdate(
        { _id: id },
        { image: `http://localhost:3000/${filename}`, title }
      );

      let splitpath = existingCategory.image.split("/");
      let imagepath = splitpath[splitpath.length - 1];

      fs.unlink(`${existingpath}/${imagepath}`, (err) => {
        console.log(err);
      });

      res.status(200).json({
        success: true,
        msg: "Both category updated successfully",
        data: existingCategory,
      });
    } else if (filename) {
      let existingpath = path.join(__dirname, "../../uploads");
      let existingCategory = await categoryModel.findOneAndUpdate(
        { _id: id },
        { image: `http://localhost:3000/${filename}` }
      );

      let splitpath = existingCategory.image.split("/");
      let imagepath = splitpath[splitpath.length - 1];

      fs.unlink(`${existingpath}/${imagepath}`, (err) => {
        console.log(err);
      });

      res.status(200).json({
        success: true,
        msg: "Category image updated successfully",
        data: existingCategory,
      });
    } else if (title) {
      let updatecategory = await categoryModel.findOneAndUpdate(
        { _id: id },
        { title },
        { new: true }
      );
      return res
        .status(201)
        .json({ msg: "category title updated", data: updatecategory });
    }
  } catch (error) {
    return res
      .status(500)
      .json({ err: error.message ? error.message : error, success: false });
  }
}

module.exports = {
  createCategoryController,
  fetchAllCategoriesController,
  singleCategoryController,
  deleteCategoryController,
  updateCategoryController,
};

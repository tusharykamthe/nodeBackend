const productCtr = {};
const { request } = require("express");
const productModel = require("./productsModel");

//getProductList
productCtr.listProduct = async (req, res) => {
  try {
    const data = await productModel.find();

    if (data) {
      res.status(200).json({
        message: "Data found successfully.",
        status: true,
        data: data,
      });
    } else {
      res.status(400).json({
        message: "Unable to find data with provided parameters.",
        status: false,
      });
    }
  } catch (error) {
    console.log("Error", error);
  }
};

//addProductList
productCtr.addProduct = async (req, res) => {
  try {
    const Title = req.body.title;
    const Price = req.body.price;
    const Description = req.body.description;
    const Category = req.body.category;
    const Image = req.body.image;

    const alreadyAProd = productModel.find({ title: Title });

    if (!alreadyAProd.length == 1) {
      const addProduct = new productModel({
        title: Title,
        price: Price,
        description: Description,
        category: Category,
        image: Image,
      });

      await addProduct.save();

      return res.status(200).json({
        message: "Successfully added all products",
        status: true,
        data: addProduct,
      });
    } else {
      return res.status(400).json({
        message: "Already data is present with the same name.",
      });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "Got some error",
      status: false,
      // err: err.message ? err.message : err
    });
  }
};

//Get product by ID - getSingleProduct
productCtr.getProductById = async (req, res) => {
  try {
    const Id = req.params.id;
    const singleProduct = await productModel.find({ _id: Id });
    if (singleProduct) {
      return res.status(200).json({
        message: "Data found for the id.",
        status: true,
        data: singleProduct,
      });
    } else {
      return res.status(400).json({
        message: "No data found for the specific id",
        status: false,
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "something went wrong.",
      status: false,
    });
  }
};

module.exports = productCtr;

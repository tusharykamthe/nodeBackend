const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema({
  // _id: Schema.Types.ObjectId,
  title: { type: String, require: false },
  price: { type: Number, require: false },
  description: { type: String, require: false },
  category: { type: String, require: false },
  image: { type: String, require: false },
});

module.exports = mongoose.model("Items", productSchema) 
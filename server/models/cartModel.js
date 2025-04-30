const { default: mongoose, Schema } = require("mongoose");

const cartSchema = new Schema(
  {
    productid: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },
    userid: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
    quantity: {
        type: Number,
        default: 1, 
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Cart", cartSchema);

const { Schema, model } = require("mongoose");

const restaurantSchema = new Schema(
  {
    name: String,
    cuisine: String,
    address: String,
    city: String,
    createdby: String,
    thumbnail: String
  }
);

const Restaurants = model("restaurants", restaurantSchema);

module.exports = Restaurants;

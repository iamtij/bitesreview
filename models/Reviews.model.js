const { Schema, model } = require("mongoose");
require ('./Restaurant.model')

const reviewsSchema = new Schema (
    {
        rating: Number,
        review: String,
        image: String,
        reviewer: String,
        user_id: {
            type: Schema.Types.ObjectId,
            ref: 'restaurants'
        }
    },
);

const Reviews = model("reviews", reviewsSchema)

module.exports = Reviews
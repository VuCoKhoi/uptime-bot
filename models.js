const mongoose = require("mongoose");

const ImageSchema = new mongoose.Schema({
  source_id: {
    type: String,
    trim: true,
    minlength: 6,
    maxlength: 100,
    required: true,
  },
  created_at: {
    type: String,
    required: true,
  },
  width: Number,
  height: Number,
  color: String,
  alt_description: { type: String, default: "free" },
  urls: {
    raw: String,
    full: String,
    regular: String,
    small: String,
    thumb: String,
  },
  likes: Number,
  user: {
    id: String,
    updated_at: String,
    username: String,
    name: String,
    first_name: String,
    last_name: String,
    twitter_username: String,
    portfolio_url: String,
    bio: String,
    location: String,
    links: mongoose.Mixed,
    profile_image: mongoose.Mixed,
    instagram_username: String,
    total_likes: Number,
    total_photos: Number,
  },
  views: Number,
  downloads: Number,
});

module.exports = mongoose.model("Image", ImageSchema);

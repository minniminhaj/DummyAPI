const mongoose = require("mongoose");

const urlShortenerSchema = new mongoose.Schema(
  {
    urlCode: {
      type: String,
      unique: true,
      required: true,
    },
    longUrl: {
      type: String,
      required: true,
    },
    shortUrl: {
      type: String,
      required: true,
    },
    clicked: {
      type: Number,
      default: 0,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    createdAt: { type: Date, default: Date.now() },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);
const UrlShortener = new mongoose.model("UrlShorten", urlShortenerSchema);
module.exports = UrlShortener;

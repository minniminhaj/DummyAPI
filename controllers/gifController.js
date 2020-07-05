const catchAsync = require("./../utils/catchAsync");
const AppError = require("./../utils/appError");
const fetch = require("node-fetch");
global.fetch = fetch;

exports.getInitGif = catchAsync(async (req, res, next) => {
  await fetch(
    `https://api.tenor.com/v1/trending?key=${process.env.TENOR_KEY}&limit=20`
  )
    .then((res) => res.json())
    .then((json) => {
      res.status(200).json({
        status: "success",
        length: json.results.length,
        data: json,
      });
    });
  next();
});

exports.getSpecificGif = catchAsync(async (req, res, next) => {
  const searchQuery = req.params.query;
  await fetch(
    `https://api.tenor.com/v1/search?key=${process.env.TENOR_KEY}&limit=20&q=${searchQuery}`
  )
    .then((res) => res.json())
    .then((json) => {
      res.status(200).json({
        status: "success",
        length: json.results.length,
        data: json,
      });
    });
  next();
});

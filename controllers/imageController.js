const catchAsync = require("./../utils/catchAsync");
const AppError = require("./../utils/appError");
const fetch = require("node-fetch");
global.fetch = fetch;

const authUnsplashgetHeader = {
  method: "get",
  headers: {
    Authorization: process.env.UNSPLASH_AUTH,
  },
};
exports.getInitPhotos = catchAsync(async (req, res, next) => {
  await fetch("https://api.unsplash.com/photos/", authUnsplashgetHeader)
    .then((res) => res.json())
    .then((json) =>
      res.status(200).json({
        status: "success",
        length: json.length,
        data: json,
      })
    )
    .catch((err) => {
      return next(new AppError("No Data Found", err));
    });

  next();
});

exports.getSpecificPhotos = catchAsync(async (req, res, next) => {
  const querySearch = req.params.query;

  await fetch(
    `https://api.unsplash.com/search/collections?query=${querySearch}`,
    authUnsplashgetHeader
  )
    .then((res) => res.json())
    .then((json) =>
      res.status(200).json({
        status: "success",
        total: json.results.length,
        data: json,
      })
    )
    .catch((err) => {
      return next(new AppError("No Data Found", err));
    });

  next();
});

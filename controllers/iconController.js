const catchAsync = require("./../utils/catchAsync");
const AppError = require("./../utils/appError");
const fetch = require("node-fetch");
global.fetch = fetch;

const authGetHeader = {
  method: "get",
  headers: {
    Accept: "application/json",
    Authorization: process.env.FLATICON_KEY,
  },
};
exports.getInitIcon = catchAsync(async (req, res, next) => {
  await fetch(`https://api.flaticon.com/v2/app/authentication`, authGetHeader);
  await fetch(
    `https://api.flaticon.com/v2/app/authentication`,
    authPostIconHeader
  )
    .then((res) => res.json())
    .then((json) => {
      res.status(200).json({
        status: "success",
        data: json,
      });
    });
  next();
});

exports.authFlatIcon = catchAsync(async (req, res, next) => {
  await fetch(`https://api.flaticon.com/v2/app/authentication`, {
    method: "post",
    headers: {
      "Content-Type": "multipart/form-data",
      Accept: "application/json",
    },
  })
    .then((res) => console.log("GIFs Loaded"))
    .then((json) => {
      res.status(200).json({
        status: "success",
        data: json,
      });
    });
  next();
});

exports.getSpecificIcon = catchAsync(async (req, res, next) => {
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

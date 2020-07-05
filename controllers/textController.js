const catchAsync = require("./../utils/catchAsync");
const AppError = require("./../utils/appError");
const fs = require("fs");

const data = fs.readFileSync(`dummyText.json`, "utf-8");
const dataObj = JSON.parse(data);
const initText = dataObj.paras.slice(1, 11);
exports.getInitDummyText = catchAsync(async (req, res, next) => {
  res.status(200).send(initText);
  next();
});

exports.getSpecificDummyParas = catchAsync(async (req, res, next) => {
  const paraNumber = parseInt(req.params.para) + 1;
  if (paraNumber > 151) {
    return next(new AppError("Please enter the paragraph within limit of 150"));
  }
  const paras = dataObj.paras.slice(1, paraNumber);
  res.status(200).send(paras);
  next();
});

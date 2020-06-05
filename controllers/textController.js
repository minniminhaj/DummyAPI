const catchAsync = require("./../utils/catchAsync");
const AppError = require("./../utils/appError");
const fetch = require("node-fetch");
global.fetch = fetch;

exports.getInitDummyText = catchAsync(async (req, res, next) => {});

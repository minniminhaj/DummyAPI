const catchAsync = require("./../utils/catchAsync");
const validUrl = require("valid-url");
const { nanoid } = require("nanoid");
const Url = require("../models/urlShortener");
const AppError = require("../utils/appError");

exports.createUrlShortner = catchAsync(async (req, res, next) => {
  const { longUrl } = req.body;
  const baseUrl = process.env.BASE_URL;

  if (!validUrl.isUri(baseUrl)) {
    return next(
      new AppError("Invalid base url ,please provide valid url", 401)
    );
  }

  const urlCode = nanoid(10);

  if (validUrl.isUri(longUrl)) {
    let url = await Url.findOne({ longUrl });

    if (url) {
      res.status(201).json({
        type: "success",
        data: url,
      });
    } else {
      const shortUrl = baseUrl + "/" + urlCode;

      url = new Url({
        longUrl,
        shortUrl,
        urlCode,
      });

      await url.save();

      res.json(url);
    }
  } else {
    return next(new AppError("Invalid url,please provide valid url", 401));
  }
});

exports.redirectShortenUrl = catchAsync(async (req, res, next) => {
  const url = await Url.findOne({ urlCode: req.params.urlCode });
  if (url) {
    return res.redirect(url.longUrl);
  } else {
    return res.status(404).json({
      type: "Fail",
    });
  }
});

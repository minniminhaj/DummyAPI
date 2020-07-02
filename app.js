const express = require("express");
const app = express();
const imageRouter = require("./routes/imageRouter");
const textRouter = require("./routes/textRouter");
const gifRouter = require("./routes/gifRouter");
const iconRouter = require("./routes/iconRouter");
const globalErrorHandler = require("./controllers/errorController");
const AppError = require("./utils/appError");
const cors = require("cors");
app.use(express.json());

app.use(cors());
// Access-Control-Allow-Origin *
// app.use(cors({
//   origin: 'https://www.welt.com'
// }))

app.options("*", cors());

app.get("/", function (req, res, next) {
  res.status(200).json({
    result: "Success",
    data: {
      Welcome: "Welcome to the dummy API",
    },
  });
  next();
});
// app.use("/api/v1/image", imageRouter);
// app.use("/api/v1/text", textRouter);
// app.use("/api/v1/gif", gifRouter);
// app.use("/api/v1/icon", iconRouter);

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

module.exports = app;

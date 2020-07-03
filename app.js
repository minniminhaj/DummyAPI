const express = require("express");
const app = express();
const imageRouter = require("./routes/imageRouter");
const textRouter = require("./routes/textRouter");
const gifRouter = require("./routes/gifRouter");
const iconRouter = require("./routes/iconRouter");
const globalErrorHandler = require("./controllers/errorController");
const AppError = require("./utils/appError");
app.use(express.json());

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});
app.use("/api/v1/image", imageRouter);
app.use("/api/v1/text", textRouter);
app.use("/api/v1/gif", gifRouter);
app.use("/api/v1/icon", iconRouter);

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);
app.listen("4000", () => {
  console.log("The app is running");
});
module.exports = app;

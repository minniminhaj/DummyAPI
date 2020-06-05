const app = require("express");
const router = app.Router();
const textController = require("./../controllers/textController");

router.get("/", textController);

module.exports = router;

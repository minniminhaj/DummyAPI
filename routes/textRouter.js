const app = require("express");
const router = app.Router();
const textController = require("./../controllers/textController");

router.get("/", textController.getInitDummyText);
router.get("/:para", textController.getSpecificDummyParas);

module.exports = router;

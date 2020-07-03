const app = require("express");
const textController = require("./../controllers/textController");

const router = app.Router();

router.get("/", textController.getInitDummyText);

router.get("/", textController.getInitDummyText);
router.get("/:para", textController.getSpecificDummyParas);

module.exports = router;

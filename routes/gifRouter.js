const app = require("express");
const gifController = require("./../controllers/gifController");

const router = app.Router();

router.get("/", gifController.getInitGif);
router.get("/:query", gifController.getSpecificGif);

module.exports = router;

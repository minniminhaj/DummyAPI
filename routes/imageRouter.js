const app = require("express");
const imageController = require("./../controllers/imageController");

const router = app.Router();

router.get("/", imageController.getInitPhotos);
router.get("/:query", imageController.getSpecificPhotos);

module.exports = router;

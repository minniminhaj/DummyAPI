const app = require("express");
const router = app.Router();
const shortnerController = require("../controllers/shortenerController");

router.route("/").post(shortnerController.createUrlShortner);
module.exports = router;

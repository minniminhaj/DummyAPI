const app = require("express");
const iconController = require("./../controllers/iconController");

const router = app.Router();

router
  .route("/")
  .get(iconController.getInitIcon)
  .post(iconController.authFlatIcon);

router.get("/:query", iconController.getSpecificIcon);

module.exports = router;

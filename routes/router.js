let express = require("express");
let router = express.Router();
const bodyParser = require("body-parser");
const {
  addPerson,
  updatePerson,
  getPerson,
  addPersonFavorite,
  getPersonWithFavorite,
} = require("../controller/user.controller");
router.use(bodyParser.urlencoded({ extended: true }));
router.use(express.json());

router.post("/person", addPerson);
router.patch("/person/:personId", updatePerson);
router.get("/person/:personId", getPerson);
router.post("/favorite", addPersonFavorite);
router.get("/favorite/:personId", getPersonWithFavorite);

module.exports = router;

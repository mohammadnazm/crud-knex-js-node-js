const knex = require("knex");

module.exports.addPerson = async (req, res) => {
  let add = {};
  add.firstName = req.body.firstName;
  add.middleName = req.body.middleName;
  add.lastName = req.body.lastName;
  add.email = req.body.email;
  add.address = req.body.address;
  await knex("tbl_person")
    .insert(add)
    .then((doc) => {
      res.json({ status: "success", message: "success" });
    })
    .catch((err) => {
      console.log(err);
      res.json({ status: "error", message: "err" });
    });
};

module.exports.updatePerson = async (req, res) => {
  let personId = req.params.personId;
  console.log(personId);
  let update = {};
  if (req.body.firstName) {
    update.firstName = req.body.firstName;
  }
  if (req.body.middelName) {
    update.middelName = req.body.middelName;
  }
  if (req.body.lastName) {
    update.lastName = req.body.lastName;
  }
  if (req.body.email) {
    update.email = req.body.email;
  }
  if (req.body.address) {
    update.address = req.body.address;
  }
  if (req.body.isDeleted) {
    update.isDeleted = req.body.isDeleted;
  }
  await knex("tbl_person")
    .update(update)
    .where("personId", personId)
    .then((doc) => {
      res.json({ status: "success", message: "success" });
    })
    .catch((err) => {
      res.json({ status: "error", message: "err" });
    });
};

module.exports.getPerson = async (req, res) => {
  let personId = req.params.personId;
  await knex("tbl_person")
    .select("*")
    .where("personId", personId)
    .then((doc) => {
      res.json({ status: "success", message: doc });
    })
    .catch((err) => {
      res.json({ status: "error", messae: "err" });
    });
};

module.exports.addPersonFavorite = async (req, res) => {
  let addFavorite = {};
  addFavorite.game = req.body.game;
  addFavorite.book = req.body.book;
  addFavorite.movie = req.body.movie;
  addFavorite.series = req.body.series;
  addFavorite.anime = req.body.anime;
  addFavorite.personId = req.body.personId;
  await knex("tbl_favorite")
    .insert(addFavorite)
    .then((doc) => {
      res.json({ status: "success", message: "success" });
    })
    .catch((err) => {
      res.json({ status: "error", messae: "err" });
    });
};

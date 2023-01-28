/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex) {
  await knex.schema.hasTable("tbl_favorite").then(async (exists) => {
    if (!exists) {
      await knex.schema
        .createTable("tbl_favorite", async (table) => {
          table.increments("favoriteId");
          table.string("game");
          table.string("book");
          table.string("movie");
          table.string("series");
          table.string("anime");
          table.boolean("isDeleted").defaultTo("false");
          table
            .integer("personId")
            .unsigned()
            .references("tbl_person.personId");
        })
        .then(() => {
          console.log("tbl_favorite Created successfully");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function (knex) {
  await knex.schema.dropTable("tbl_favorite");
};

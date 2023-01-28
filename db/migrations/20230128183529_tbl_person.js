/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex) {
  await knex.schema.hasTable("tbl_person").then(async (exists) => {
    if (!exists) {
      await knex.schema
        .createTable("tbl_person", async (table) => {
          table.increments("personId");
          table.string("firstName");
          table.string("middleName");
          table.string("lastName");
          table.string("email");
          table.string("address");
          table.boolean("isDeleted").defaultTo("false");
        })
        .then(() => {
          console.log("User Table Created successfully");
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
exports.down = function (knex) {
  knex.schema.dropTable("tbl_person");
};

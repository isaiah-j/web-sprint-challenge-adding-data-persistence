
exports.up = knex =>
    knex.schema.createTable("resources", tbl => {
        tbl.increments();
        tbl.string('name', 128).notNullable().unique()
        tbl.string('description', 256)
    }
    );


exports.down = knex => knex.schema.dropTableIfExists("resources");
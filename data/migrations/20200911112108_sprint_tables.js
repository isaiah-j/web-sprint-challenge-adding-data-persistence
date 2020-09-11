exports.up = knex =>
    knex.schema.createTable("projects", tbl => {
        tbl.increments();
        tbl.string('name', 128).notNullable()
        tbl.string('description', 256)
        tbl.boolean('isCompleted').defaultTo(false)
    }
    );


exports.down = knex => knex.schema.dropTableIfExists("projects");



exports.up = knex =>
    knex.schema.createTable("tasks", tbl => {
        tbl.increments();
        tbl.string('description', 128).notNullable()
        tbl.string('notes', 256)
        tbl.integer('project_id').notNullable()
        tbl.boolean('isCompleted').defaultTo(false)
    }
    );


exports.down = knex => knex.schema.dropTableIfExists("tasks");

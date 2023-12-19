/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
        .createTable('projects', table => {
            table.increments('project_id').primary()
            table.string('project_name', 128).notNullable()
            table.string('project_description', 200)
            table.boolean('project_completed').defaultTo(false)
        })
        .createTable('resources', table => {
            table.increments('resourse_id').primary()
            table.string('resource_name', 128).notNullable().unique()
            table.string('resource_description', 200)
        })
        .createTable('tasks', table => {
            table.increments('task_id').primary()
            table.string('task_description', 200).notNullable()
            table.string('task_notes', 200)
            table.boolean('task_completed').defaultTo(false)
            table.integer('project_id')
                .unsigned()
                .notNullable()
                .references('project_id')
                .inTable('projects')
        })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('tasks')
        .dropTableIfExists('resources')
        .dropTableIfExists('projects')
};


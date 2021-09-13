exports.up = async (knex) => knex.schema.createTable('product', (table) => {
  table.increments('id').primary();
  table.string('nome').notNullable();
  table.decimal('preco').notNullable();
  table.timestamp('created_at').defaultTo(knex.fn.now());
  table.timestamp('updated_at').defaultTo(knex.fn.now());
});

exports.down = async (knex) => knex.schema.dropTable('product');
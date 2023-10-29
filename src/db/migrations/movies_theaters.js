exports.up = function(knex) {
  return knex.schema.createTable("movies_theaters", (table) => {
    // table.increments("id").primary().unsigned();
    table.increments("movie_id").unsigned();
    table.integer("theater_id").unsigned();
    table.boolean("is_showing").defaultTo(false);
    
    table.foreign("movie_id").references("movie_id").inTable("movies");
    table.foreign("theater_id").references("theater_id").inTable("theaters");
    // why isn't it showing up in Dbeaver when migrating latest 
    // table.primary(["movie_id", "theater_id"]);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable("movies_theaters");
};

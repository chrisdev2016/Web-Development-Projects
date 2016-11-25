
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('dealerships').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('dealerships').insert({make: 'Hyundai', city: 'Toronto', province: 'ON', postal_code: 'M4M 2E4', street: '21 Broadview Ave'}),
        knex('dealerships').insert({make: 'Hyundai', city: 'Thornhill', province: 'ON',  postal_code: 'L4J 1V8', street: '7200 Yonge St'})
      ]);
    });
};

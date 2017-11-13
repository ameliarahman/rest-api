'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      first_name: "Amelia",
      last_name: "Rahman",
      username: "amel",
      password: "$2a$10$X2CQbRKDK9HZMZIZS9ZhzuoZyqvBv7qo6WuFQ7nTz510aE1DVTrRu",
      address: "Jl. Bunga Mawar Melati",
      no_telp: "081318352537",
      admin: true

    }])

    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};

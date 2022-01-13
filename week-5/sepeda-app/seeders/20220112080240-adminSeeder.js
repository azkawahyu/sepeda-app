'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     await queryInterface.bulkInsert(
      "Admins",
      [
        {
          name: "Admin",
          email: "admin@gmail.com",
          password: "abcd1234",
          isAdmin: true,
          createdAt : new Date(),
          updatedAt : new Date()
        },
        {
          name: "Admin2",
          email: "admin2@gmail.com",
          password: "abcd1234",
          isAdmin: true,
          createdAt : new Date(),
          updatedAt : new Date()
        }
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};

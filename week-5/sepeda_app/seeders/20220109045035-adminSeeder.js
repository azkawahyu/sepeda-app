"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Admins",
      [
        {
          name: "Admin",
          isAdmin: true,
          email: "admin@gmail.com",
          password: "admin1234",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Admin2",
          isAdmin: true,
          email: "admin2@gmail.com",
          password: "admin1234",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
